import { useState } from "react";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

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
