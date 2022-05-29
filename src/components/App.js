import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import EditProfilePopup from './EditProfilePopup'
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getInitialCards()
			.then((data) => {
				setCards(data);
			})
			.catch(console.error);
	}, []);

	useEffect(() => {
		api.getUserInfo()
			.then(userInfo => {
				setCurrentUser(userInfo)
			})
			.catch(console.error);
	}, []);

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false)
		setIsAddPlacePopupOpen(false)
		setIsEditAvatarPopupOpen(false)
		setSelectedCard(null)
	};

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true)
	};

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true)
	};

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true)
	};

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleUpdateUser(user) {
		api.editProfile(user)
			.then(userInfo => {
				setCurrentUser(userInfo);
				closeAllPopups();
			})
			.catch(console.error);
	}

	function handleUpdateAvatar(userAvatar) {
		api.changeAvatar(userAvatar)
			.then(userInfo => {
				setCurrentUser(userInfo);
				closeAllPopups();
			})
			.catch(console.error);
	}

	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
		}).catch(console.error);
	}

	function handleCardDelete(cardId) {
		api.deleteCard(cardId)
			.then(() => {
				setCards([...cards.filter(c => c._id !== cardId)]);
				closeAllPopups();
			})
			.catch(console.error);
	}

	function handleAddPlaceSubmit(card) {
		api.addCard(card)
			.then(newCard => {
				setCards([newCard, ...cards]);
				closeAllPopups();
			})
			.catch(console.error)
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="body">
				<Header />
				<div className="page">
					<Main
						cards={cards}
						onCardLike={handleCardLike}
						onCardDelete={handleCardDelete}
						onCardClick={handleCardClick}
						onEditProfile={handleEditProfileClick}
						onAddPlace={handleAddPlaceClick}
						onEditAvatar={handleEditAvatarClick}
					/>
					<Footer />

					<EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
					<EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
					<AddPlacePopup onCardAdd={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
					<PopupWithForm name='_id' title='Вы уверены?' onClose={closeAllPopups}>
						<input type="hidden" name="_id" className="popup__field" />
						<button type="submit" className="popup__button-save popup__button-yes">Да</button>
					</PopupWithForm>
					<PopupWithForm name='profil' title='Alex' isOpen={false} onClose={closeAllPopups}>
						<label className="popup__label">
							<input type="url" name="avatar" placeholder="Ссылка" id="avatar-input" className="popup__field" required />
							<span className="popup__input-error avatar-input-error"></span>
						</label>
					</PopupWithForm>
					<ImagePopup card={selectedCard} onClose={closeAllPopups} />
				</div>
			</div>

		</CurrentUserContext.Provider>
	);
}

export default App;
