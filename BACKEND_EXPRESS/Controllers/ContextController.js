const ContextModel = require("../Models/Context");
const UserModel = require("../Models/User");
const express = require("express");

const router = express.Router();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function run(text) {
    // For embeddings, use the Text Embeddings model
    const model = genAI.getGenerativeModel({ model: "text-embedding-004"});
    
    
    const result = await model.embedContent(text);
    const embedding = result.embedding;
    console.log(embedding);
    return embedding.values;
    }
    

const createEmbedding = async(query) =>{
    const response = await fetch('http://127.0.0.1:5000/embed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: query })
    });

    const { embedding } = await response.json();
    return embedding;
}

async function findSimilarDocuments(embedding, userId) {
    try {
      // Step 1: Perform the vector search
      const documents = await ContextModel.aggregate([
        {
          "$vectorSearch": {
            "index": "vector_index",
            "path": "embedding",
            "queryVector": embedding,
            "numCandidates": 6,
            "limit": 5  // Retrieve more candidates than needed
          }
        },
        {
          "$project": {
            "context": 1,
            "UserId":1,
            "score": 1
          }
        }
      ]);
  
      // Step 2: Filter results by UserId
      const filteredDocuments = documents.filter(doc => doc.UserId && doc.UserId.toString() === userId.toString());
  
      return filteredDocuments;
    } catch (err) {
      console.error(err);
      throw new Error('Error querying similar documents');
    }
  }
  


  router.post('/query-embedding', async (req, res) => {
    try {
      const { query, UserId } = req.body;
  
      // Generate embedding for the input query
      const embedding = await run(query);
  
      // Find similar documents, filtered by UserId
      const similarDocuments = await findSimilarDocuments(embedding, UserId);
  
      console.log('similarDocuments: ', similarDocuments);
  
      // Get the document with the highest score
      const highestScoreDoc = similarDocuments.reduce((highest, current) => {
        return highest.score > current.score ? highest : current;
      }, { score: -Infinity }); // Initialize with a default value to handle empty arrays
  
      console.log(highestScoreDoc);
  
      const response = {
        msg: "success",
        similarDocuments
      };
  
      res.json(response);
    } catch (err) {
      res.status(500).json({
        error: 'Internal server error',
        message: err.message,
      });
    }
  });
  


router.post("/create", async (req, res) => {
    try {
      const { url, UserId } = req.body;
  
      const response = await fetch('http://127.0.0.1:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
      });
  
      if (!response.ok) {
        return res.json({ success: false, message: 'Failed to generate contexts' });
      }
  
      const all_contexts = await response.json();
      for (const item of all_contexts) {
        
        const embedding = await run(item);

        const context = item;
        const upload = {
          context,
          embedding,
          UserId,
        };
  
        const newContext = new ContextModel(upload);
        await newContext.save();

        const user = await UserModel.findById(UserId);
        if (user) {
          user.contexts.push(newContext);
          await user.save();
        } else {
          return res.json({ success: false, message: 'User not found' });
        }
      }
  
      return res.json({ success: true, message: 'Contexts created successfully' });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  });


module.exports = router;
