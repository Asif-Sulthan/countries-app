
import React from 'react';
import Card from './Card';


const CardList = ({ countries }) => {

    const cardsArray = countries.map( (country, index) => {
        return (<Card key={index}
        id={countries[index].id} 
        name={countries[index].name}
        capital={countries[index].capital}
        population={countries[index].population} 
        details={countries[index].details}/>)
    })

    return (
        <div >
            {cardsArray}
        </div>
    )
}

export default CardList;