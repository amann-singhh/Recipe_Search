import React from "react";
// import { Link } from "react-router-dom";
import "./Recipe.css";

const Recipe = ({ title, image }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-content">
        <img src={image} alt={title} className="recipe-image" />
        <h2 className="recipe-title">{title}</h2>
        <p onClick={()=>{}}>Recipe...</p>
      </div>
    </div>
  );
};

export default Recipe;