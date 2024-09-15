import { Button } from "../ui/button";

export function FrontImage() {
  return (
    <div>
      <div
        className="w-full h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(/front-image.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="text-center mb-4 font-bold text-8xl">Lorem ipsum dolor sit amet</p>
        <p className="text-center mb-4 font-bold text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dolorum suscipit. Amet mollitia ea ipsa?</p>

        <div className="space-x-4">
          <Button className="bg-white p-7 text-xl mt-7 mr-5 text-black hover:bg-gray-200 hover:text-black transition duration-300">
            SignUp
          </Button>
          <Button className="bg-white p-7 text-xl mt-7 mr-5 text-black hover:bg-gray-200 hover:text-black transition duration-300">
            Login
          </Button>
        </div>
      </div>

      <p className="text-center mb-4 font-bold text-5xl mt-40 text-gray-700">Empowering companies <br/> to stand out with customer experience</p>
      <div className="m-20">
        <div
          className="w-full  h-32 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/companies-using-chatbot_hu9f08a4e0422edaf055dbbd3c390a7b89_15646_1800x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
          }}></div>
        </div>

        <div className="flex justify-center items-center">
          <img src="https://freesvg.org/img/1538298822.png" width="300px" height="300px" className="mt-14" />
        </div>

        <span className="block text-center">
          <p className="inline-block mb-4 font-bold text-5xl">ChatBot</p>
          <p className="inline-block mb-4 font-bold text-5xl ml-4 text-gray-700">AI Assist</p>
        </span>

        <p className="text-center mb-4  text-2xl">Your own generative AI Large Language Model framework, designed <br/> and launched in minutes without coding, based on your resources.</p>

        <div className="m-40 grid grid-cols-2 gap-10">
          <div className="bg-gray-200 p-2 h-[650px]">
            <div
            className="w-full h-96 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/no-dependencies_hu860ae42703f444727cb2737d9cb8d2c8_33830_1040x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ></div>

            <p className="text-center mt-10  text-4xl font-bold">Standalone AI</p>
            <p className="text-center mt-4  text-xl">No dependencies on third-party providers like OpenAI,<br/> Google Bard or Bing AI.</p>
          </div>

          <div className="bg-gray-200 p-2 h-[650px]">
            <div
            className="w-full h-96 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/right-answers-in-a-flash_hu30768894c047b42b023e7a966a2c621a_65509_1536x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ></div>

            <p className="text-center mt-10  text-4xl font-bold">The right answers in a flash</p>
            <p className="text-center mt-4  text-xl">Much faster than comparable solutions, replies immediately, <br/>and hosts human-like conversations.</p>
          </div>
        </div>




        <p className="text-left ml-40 mb-4 font-bold text-6xl text-gray-700 leading-tight">Driven by data,<br/>powered by AI,<br/> controlled by you</p>

        <div className="m-20 grid grid-cols-2 gap-10">
          <div className="bg-gray-200 p-2 h-[650px]">
            <div
            className="w-full h-96 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/manage-all-your-AI-data-sources_hu73750828d03538720c7d5f7c5fbfbc1a_29468_1280x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ></div>

            <p className="text-center mt-10  text-4xl font-bold">Manage all your <br/> AI data sources</p>
            <p className="text-center mt-4  text-xl">Switch on/off website URLs, help center articles,<br/> and text snippets to select sources currently <br/>utilized by your AI bot.</p>
          </div>

          <div className="bg-gray-200 p-2 h-[650px]">
            <div
            className="w-full h-96 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/control-your-bot-responses_hu22b98dd3a0df600f9a6c494ad9e345c4_32714_1280x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ></div>

            <p className="text-center mt-10  text-4xl font-bold">Control your <br/>bot responses</p>
            <p className="text-center mt-4  text-xl">The FAQ module has priority over AI Assist, giving <br/>you power over the collected questions and answers<br/> used as bot responses.</p>
          </div>

          <div className="bg-gray-200 p-2 h-[650px]">
            <div
            className="w-full h-96 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/collect-company-data_hu84e17c4573297a6baf4e75c43e5ba59a_21741_1280x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ></div>

            <p className="text-center mt-10  text-4xl font-bold">Collect all company <br/>data automatically</p>
            <p className="text-center mt-4  text-xl">Effortlessly gather crucial company details and use them to<br/> supercharge your customer's experience during the chat.</p>
          </div>

          <div className="bg-gray-200 p-2 h-[650px]">
            <div
            className="w-full h-96 flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(https://www.chatbot.com/ready-to-start-chatting_hu4ba9570edc7b4ee8010c793f4f6f700c_197828_1280x0_resize_lanczos_3.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            ></div>

            <p className="text-center mt-10  text-4xl font-bold">Ready to start<br/> chatting just like that</p>
            <p className="text-center mt-4  text-xl">Engage visitors with ChatBot's quick responses and<br/> personalized greetings, fueled by your data.</p>
          </div>
        </div>


      </div>
  );
}
