import React from "react";
import "../../Components/Background/Profile/Explore.css";
import photo from "../../Assets/questionMark.png";
import person1 from "../../Assets/person1.png";
import person2 from "../../Assets/person2.png";
import person3 from "../../Assets/person3.png";
import Button from "../../Components/Button/Button";
import { useState, useEffect } from "react";
const Find = () => {
  const [findButton, setFindButton] = useState(true);
  const [findMatch, setMatch] = useState(0);
  const matches = [person1, person2, person3];

  const nextMatch = () => {
    setMatch(findMatch + 1);
    if (findMatch >= 2) {
      setMatch(0);
    }
  };

  return (
    <div class="explore">
      {findButton ? (
        <img src={photo}></img>
      ) : (
        <img src={matches[findMatch]}></img>
      )}
      {findButton ? (
        <div className="chooseButtons">
          <button onClick={() => setFindButton(false)}>Find</button>
        </div>
      ) : (
        <div className="chooseButtons">
          <button onClick={nextMatch}>nah</button>
          <button onClick={nextMatch}>yes</button>
        </div>
      )}
    </div>
  );
};

export default Find;
