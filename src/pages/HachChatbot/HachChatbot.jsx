import Chatbot from "../../components/Chatbox"
import Layout from "../../components/Layout"
import TransparentTopBar from "../../components/TransparentTopBar"
import { HachChatbotSuggestedQuestions } from "../../data/SuggestedQuestion";
import groupLogo from "/src/assets/group_main_icon.png";

const HachChatbot = () => {
  return (
    <Layout>
    <TransparentTopBar text={" Azure OpenAi + Congnitive Search "} />
    <div className="flex justify-center  items-center my-10">
      <Chatbot label={'hach_chatbot'} logo={groupLogo} questions={HachChatbotSuggestedQuestions} title={'HACH Operations'} placeholder={""}  />
    </div>
 
  </Layout>
  )
}

export default HachChatbot