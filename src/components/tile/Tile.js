import React from "react";

export const Tile = ({ name, description, title }) => {
  return (
    <div className="tile-container">
      <h2>{title}</h2>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};
