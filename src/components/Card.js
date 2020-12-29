import React from 'react';
import "./Card.css";
import "./flags.min.css";


const Card = ({name, flag, capital, population, details, id}) => {
    return (
        <div className="grid-container">
            <img alt="flag" src={`https://www.countryflags.io/:ISO 3166/:style/:size.png`} height='200' width='200'/>
            <div>
                <h2>{name}</h2>
                <p>{capital}</p>
                <p>{population}</p>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Card;