import Chatbot from "../../components/Chatbox";
import Layout from "../../components/Layout";
import secondaryLogo from "/src/assets/secondary_logo.png";
import TransparentTopBar from "../../components/TransparentTopBar";
import { SuggestedQuestions } from "../../data/SuggestedQuestion";

const ChatBot = () => {
  return (
    <Layout bgimg={"bg-bg_chatbot"}>
      <TransparentTopBar text={" Azure OpenAi + Cognitive Search "} />
      <div className="flex justify-center  items-center my-10">
        <Chatbot
          label={"hach_chatbot"}
          logo={secondaryLogo}
          questions={SuggestedQuestions}
          title={"HR Operations"}
          placeholder={""}
        />
      </div>
    </Layout>
  );
};

export default ChatBot;
