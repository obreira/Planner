import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div className="tile-container">
      <h2>TileList</h2>
      {data.map((item, index) => (
        <Tile
          key={index}
          name={item.name}
          description={item.description}
          title={item.title}
        />
      ))}
    </div>
  );
};
