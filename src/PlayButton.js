import React from "react";
import { useState } from "react";
import "./App.css";

import { BsPlayCircle } from "react-icons/bs";

function PlayButton(props) {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <BsPlayCircle
        class="fa-play"
        size="70px"
        color={activeButton === props.buttonKey ? "#e41984" : "#888888"}
        onMouseEnter={() => setActiveButton(props.buttonKey)}
        onMouseLeave={() => setActiveButton(null)}
      />
    </>
  );
}

export default PlayButton;
