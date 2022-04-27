import React from "react";
import { useState } from "react";
import "./App.css";
import "fa-icons";

import PlayButton from "./PlayButton";

function Card(props) {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="grid">
      {props.albums.map((album, i) => (
        <div className="card" key={i}>
          <img src={album.images[0].url} />
          <div className="card-overlay">
            <div className="text-box">
              <p className="album">{album.name}</p>
              <p className="artist"> by {album.artists[0].name}</p>
            </div>
            <PlayButton buttonKey={i} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
