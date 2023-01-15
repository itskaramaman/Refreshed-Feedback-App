import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedback";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (feedback) => {
    setFeedbacks([...feedbacks, { ...feedback, id: feedbacks.length + 1 }]);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm addFeedback={addFeedback} />
                  <FeedbackStats feedbacks={feedbacks} />
                  <FeedbackList
                    feedbacks={feedbacks}
                    handleDelete={handleDelete}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
