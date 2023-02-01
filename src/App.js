import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="main"></div>
      <FeedbackList feedback={feedback} />
    </>
  );
}

export default App;
