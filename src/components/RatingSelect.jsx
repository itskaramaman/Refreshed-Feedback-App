import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <ul className="rating">
      {Array.from(Array(10).keys()).map((i) => (
        <li key={i}>
          <input
            type="radio"
            id={i + 1}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={i + 1}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
