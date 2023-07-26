import React from "react";
import "./style.css";
const Loader = () => {
  return (
    <div className="LoadingDiv backdrop">
      <img
        className="LoadingImg"
        src="https://cdn.pixabay.com/animation/2023/04/16/16/42/16-42-44-845_512.gif"
        alt=""
      />
    </div>
  );
};

export default Loader;
