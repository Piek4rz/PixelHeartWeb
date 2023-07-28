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
  const [color, setColor] = useState("");
  const matches = [
    {
      photo: person1,
      name: "Jane",
      lvl: 21,
      color: "green",
    },
    {
      photo: person2,
      name: "Mikel",
      lvl: 25,
      color: "blue",
    },
    {
      photo: person3,
      name: "Joshua",
      lvl: 29,
      color: "red",
    },
  ];

  const nextMatch = () => {
    setMatch((prevMatch) => {
      let newMatch = prevMatch + 1;
      if (newMatch >= matches.length) {
        newMatch = 0;
      }
      setColor(matches[newMatch].color);
      return newMatch;
    });
  };

  return (
    <div style={{ backgroundColor: color }} class="explore">
      {findButton ? (
        <img src={photo}></img>
      ) : (
        <div className="profile">
          <div>
            <p className="lvl">Lv {matches[findMatch].lvl}</p>
            <p>{matches[findMatch].name}</p>
          </div>
          <img src={matches[findMatch].photo}></img>
        </div>
      )}
      {findButton ? (
        <div className="chooseButtons">
          <button
            onClick={() => {
              setFindButton(false);
              setColor(matches[0].color);
            }}
          >
            Find
          </button>
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
