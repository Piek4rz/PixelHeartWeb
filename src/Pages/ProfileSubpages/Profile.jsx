import React from 'react';
import "../../Components/Background/Profile/Profile.css"
import s1 from "../../Assets/stat1.png";
import s2 from "../../Assets/stat2.png";
import s3 from "../../Assets/stat3.png";
import s4 from "../../Assets/stat4.png";
import s5 from "../../Assets/stat5.png";
import s6 from "../../Assets/stat6.png";

const Profile = () => {
    return (
        <div className="profileContainer">
            <div className="centeredContainer">
                <div className="columnContainer stats">
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
                </div>
                <div className="columnContainer ">
                    <h1>Profile</h1>
                    <img src="https://static1.personality-database.com/profile_images/79234575fdf14620b58b46d00d826aff.png"/>
                </div>
                <div className="columnContainer stats">
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
            </div>
            <div className="centeredContainer bottom">
                <div className="stats desc">
                    <p>Description</p>
                </div>
                <div className="stats games">
                    <p>Fav games</p>
                </div>
            </div>
        </div>
    );
};



export default Profile;