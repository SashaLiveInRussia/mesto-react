import React, { useEffect, useState } from 'react'
import api from '../utils/api';
import pencil from '../images/edit-avatar.svg'
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const [userName, setUserName] = useState(false);
	const [userDescription, setUserDescription] = useState(false);
	const [userAvatar, setUserAvatar] = useState(false);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getUserInfo()
			.then(userData => {
				setUserName(userData.name);
				setUserDescription(userData.about);
				setUserAvatar(userData.avatar);
			});

		api.getInitialCards()
			.then((data) => {
				setCards(data);
			});
	}, []);

	return (
		<main>
			<section className="profile">
				<div className="profile__info">
					<div className="profile__edit-avatar" onClick={onEditAvatar}>
						<img className="profile__pencil" src={pencil} alt="" />
						<img className="profile__avatar" src={userAvatar ?? ''}  alt="Аватар" />
					</div>
					<div>
						<div className="profile__name-and-edit">
							<h1 className="profile__name">{userName}</h1>
							<button type="button" className="profile__edit" onClick={onEditProfile}></button>
						</div>
						<p className="profile__sub-name">{userDescription}</p>
					</div>
				</div>
				<button type="button" className="profile__add-button" onClick={onAddPlace}></button>
			</section>

			<section className="elements">
				{cards.map(card => (
					<Card onCardClick={onCardClick} key={card._id} card={card} />
				))}
			</section>
		</main>
	)
}

export default Main;

