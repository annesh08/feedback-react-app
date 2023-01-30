import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="main"></div>
      <FeedbackItem />
    </>
  );
}

export default App;
