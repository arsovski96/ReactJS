import React from "react";

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{content}</p>
    </div>
  );
};

export default Card;
