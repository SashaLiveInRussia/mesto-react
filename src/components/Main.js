import React from 'react'
import api from '../utils/api'

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
	const [userName, setUserName] = React.useState(false);
	const [userDescription, setUserDescription] = React.useState(false);
	const [userAvatar, setUserAvatar] = React.useState(false);

	React.useEffect((api) => {
		return api.getUserInfo()
	});


	return (
		<main>
			<section className="profile">
				<div className="profile__info">
					<div className="profile__edit-avatar" onClick={onEditAvatar}>
						<img className="profile__pencil" src="<%=require('./images/edit-avatar.svg')%>" alt="Аватар" />
						<img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар" />
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
			</section>
		</main>
	)
}

export default Main;

