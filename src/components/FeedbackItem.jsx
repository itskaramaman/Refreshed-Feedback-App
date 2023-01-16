import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

const FeedbackItem = ({ feedback, handleDelete, handleEdit }) => {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(feedback)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
