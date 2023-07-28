import React from 'react';
import PropTypes from 'prop-types';
import "../../Components/Background/Profile/List.css";
import p1 from "../../Assets/person1.png"

const List = () => {
    return (
        <div className="listContainer">
                <div className="profilesList">
                    <div className="profileCard">
                        <div className="cardContents">
                            <img src={p1}/>
                            <div className="cardText">
                                <p>someone</p>
                                <p className="message">chat message chat message </p>
                            </div>
                        </div>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                    <div className="profileCard">
                        <p>someone</p>
                    </div>
                </div>
            <div className="chatContainer">
                chat
                <p>tba..</p>
            </div>
        </div>
    );
};



export default List;