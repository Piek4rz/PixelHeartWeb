import React from "react";
import "../../Components/Background/Profile/Explore.css";
import photo from "../../Assets/questionMark.png";
import Button from "../../Components/Button/Button";
import { useState, useEffect } from "react";
const Find = () => {
  const [findButton, setFindButton] = useState(true);

  return (
    <div class="explore">
      <img src={photo}></img>
      {findButton ? (
        <button onClick={() => setFindButton(false)}>Find</button>
      ) : (
        <div className="chooseButtons">
          <button>nah</button>
          <button>yes</button>
        </div>
      )}
    </div>
  );
};

export default Find;
