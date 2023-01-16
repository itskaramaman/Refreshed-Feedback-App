import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, text: "This item is from context", rating: 9 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // delete feedback
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  // Add feedback
  const addFeedback = (feedback) => {
    setFeedbacks([...feedbacks, { ...feedback, id: feedbacks.length + 1 }]);
  };

  // Update Feedback
  const updateFeedback = (id, updItem) => {
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        handleDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
