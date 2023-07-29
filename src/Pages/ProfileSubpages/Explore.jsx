import React from "react";
import "../../Components/Background/Profile/Explore.css";
import photo from "../../Assets/questionMark.png";
import person1 from "../../Assets/person1.png";
import person2 from "../../Assets/person2.png";
import person3 from "../../Assets/person3.png";
import Button from "../../Components/Button/Button";
import { useState, useEffect } from "react";
import s1 from "../../Assets/stat1.png";
import s2 from "../../Assets/stat2.png";
import s3 from "../../Assets/stat3.png";
import s4 from "../../Assets/stat4.png";
import s5 from "../../Assets/stat5.png";
import s6 from "../../Assets/stat6.png";

const Explore = () => {
  const [findButton, setFindButton] = useState(true);
  const [findMatch, setMatch] = useState(0);
  const [color, setColor] = useState("");
  const matches = [
    {
      photo: person1,
      name: "Jane",
      lvl: 21,
    },
    {
      photo: person2,
      name: "Mikel",
      lvl: 25,
    },
    {
      photo: person3,
      name: "Joshua",
      lvl: 29,
    },
  ];

  const nextMatch = () => {
    setMatch((prevMatch) => {
      let newMatch = prevMatch + 1;
      if (newMatch >= matches.length) {
        newMatch = 0;
      }
      // setColor(matches[newMatch].color);
      return newMatch;
    });
  };

  return (
    <div style={{ backgroundColor: color }} class="explore">
      {findButton ? (
        <img src={photo}></img>
      ) : (
        <div className="profile">
          <div className="left">
            <p className="title">Skills</p>
            <div className="textContainer">
              <p>Social Skills</p>
              <p>70%</p>
            </div>
            <img src={s1}/>
            <div className="textContainer">
              <p>Agility</p>
              <p>35%</p>
            </div>
            <img src={s2}/>
            <div className="textContainer">
              <p>Party</p>
              <p>80%</p>
            </div>
            <img src={s3}/>
            <div className="textContainer">
              <p>Gaming</p>
              <p>90%</p>
            </div>
            <img src={s4}/>
            <div className="textContainer">
              <p>Sanity</p>
              <p>15%</p>
            </div>
            <img src={s5}/>
            <div className="textContainer">
              <p>Strength</p>
              <p>85%</p>
            </div>
            <img src={s6}/>

          </div>
          <div className="middle">
            <p>
              <span className="lvl">Lv {matches[findMatch].lvl}.</span> {matches[findMatch].name}
            </p>
            <img src={matches[findMatch].photo}></img>

          </div>
          <div className="right">
            <div className="desc">
              <p>Description</p>
            </div>
            <div className="games">
              <p>Favourite games</p>
              <div className="grid-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
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
          <button id="no" onClick={nextMatch}>nah</button>
          <button id="yes" onClick={nextMatch}>yes</button>
        </div>
      )}
    </div>
  );
};


export default Explore;