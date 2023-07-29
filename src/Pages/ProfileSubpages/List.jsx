import React from 'react';
import PropTypes from 'prop-types';
import "../../Components/Background/Profile/List.css";
import p1 from "../../Assets/person1.png";
import p2 from "../../Assets/person2.png";
import p3 from "../../Assets/person3.png";
import p4 from "../../Assets/person4.jpg";
import p5 from "../../Assets/person5.jpg";
import p6 from "../../Assets/person6.jpg";
import p7 from "../../Assets/person7.jpg";
import p8 from "../../Assets/person8.jpg";
import p9 from "../../Assets/person9.jpg";
import p10 from "../../Assets/person10.jpg";


const Card = ({ imageSrc, name, message }) => {
    return (
        <div className="profileCard">
            <div className="cardContents">
                <img src={imageSrc} />
                <div className="cardText">
                    <p>{name}</p>
                    <p className="message">{message}</p>
                </div>
            </div>
        </div>
    );
};

const List = () => {

    const cardsData = [
        {
            id: 1,
            imageSrc: p2,
            name: 'John',
            message: 'Hey there! How are you?',
        },
        {
            id: 2,
            imageSrc: p1,
            name: 'Jane',
            message: 'Just wanted to say hi!',
        },
        {
            id: 3,
            imageSrc: p6,
            name: 'Michael',
            message: 'What are your plans for the weekend?',
        },
        {
            id: 4,
            imageSrc: p4,
            name: 'Emily',
            message: 'I love your new profile picture!',
        },
        {
            id: 5,
            imageSrc: p5,
            name: 'Daniel',
            message: 'Lets catch up soon!',
        },
        {
            id: 6,
            imageSrc: p3,
            name: 'Sophia',
            message: 'Congratulations on your promotion!',
        },
        {
            id: 7,
            imageSrc: p7,
            name: 'William',
            message: 'Have a great day!',
        },
        {
            id: 8,
            imageSrc: p8,
            name: 'Olivia',
            message: 'Remember to drink water!',
        },
        {
            id: 9,
            imageSrc: p9,
            name: 'James',
            message: 'Thanks for the help yesterday!',
        },
        {
            id: 10,
            imageSrc: p10,
            name: 'Ava',
            message: 'I cant wait for the weekend!',
        },
    ];

    return (
        <div className="listContainer">
                <div className="profilesList">
                    {cardsData.map((card) => (
                        <Card
                            key={card.id} // Make sure to provide a unique key for each card
                            imageSrc={card.imageSrc}
                            name={card.name}
                            message={card.message}
                        />
                    ))}
                </div>
            <div className="chatContainer">
                chat
                <p>tba..</p>
            </div>
        </div>
    );
};



export default List;