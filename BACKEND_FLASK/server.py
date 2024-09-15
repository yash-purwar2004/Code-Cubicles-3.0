from flask import Flask, request, jsonify
##from transformers import AutoTokenizer, AutoModel
##import torch
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time


# Load tokenizer and model
##tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
##model = AutoModel.from_pretrained("bert-base-uncased")
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Load pre-trained model

def get_all_text(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')
        text = soup.get_text(separator=' ', strip=True)
        return text
    except requests.RequestException as e:
        print(f"Error fetching {url}: {e}")
        return None

def crawl_website(start_url, max_pages=10):
    visited_urls = set()
    urls_to_visit = [start_url]
    page_count = 0
    l = []
    while urls_to_visit and page_count < max_pages:
        url = urls_to_visit.pop(0)
        if url in visited_urls:
            continue

        print(f"Crawling: {url}")
        visited_urls.add(url)

        text = get_all_text(url)
        if text:
           l.append(text)  # Print the first 500 characters of text for brevity
            

        soup = BeautifulSoup(requests.get(url).content, 'html.parser')
        for link in soup.find_all('a', href=True):
            href = link['href']
            full_url = urljoin(url, href)
            parsed_url = urlparse(full_url)

            if parsed_url.netloc == urlparse(start_url).netloc and full_url not in visited_urls:
                urls_to_visit.append(full_url)

        page_count += 1
        time.sleep(1)  # Be polite and avoid overloading the server
    return l


##@app.route('/embed', methods=['POST'])
##def get_embedding():
##    # Get the text from the request
##    if request.is_json:
##        data = request.get_json()
##        text = data.get('text', '')
##        # Process the text here...
##
##        # Generate embeddings
##        if text:
##            inputs = tokenizer(text, return_tensors="pt")
##            with torch.no_grad():
##                outputs = model(**inputs)
##                    
##            # Extract embeddings
##            embedding = outputs.last_hidden_state.mean(dim=1).squeeze().tolist()
##            return jsonify({'embedding': embedding})
##        else:
##            return jsonify({'error': 'No text provided'}), 400

@app.route('/generate', methods=['POST'])
def generate_context():
    if request.is_json:
        data = request.get_json()
        url = data.get('url', '')
        
        if not url:
            return jsonify({'error': 'No URL provided'}), 400
            
        # Crawl the website and get the list of texts
        texts = crawl_website(url)
        
        return texts
    else:
        return jsonify({'error': 'Invalid request format'}), 400 

if __name__ == '__main__':
    app.run(debug=True)
