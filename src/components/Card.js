import React from 'react';

function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="element">
            <div className="element__delete"></div>
            <img className="element__img" src={card.link} alt="Карачево" onClick={handleClick} />
            <div className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                    <button type="button" className="element__like"></button>
                    <span type="number" className="element__like-number">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card