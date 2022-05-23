import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

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

	return (
		<body className="body">
			<Header />
			<div className="page">
				<Main
					onCardClick={handleCardClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
				/>
				<Footer />

				<PopupWithForm name='profil' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
					<label className="popup__label">
						<input type="text" name="name" placeholder="Имя" id="name-input" className="popup__field" minLength="2"
							maxLength="40" required />
						<span className="popup__input-error name-input-error"></span>
					</label>
					<label className="popup__label">
						<input type="text" name="about" placeholder="Профессия" id="profession-input" className="popup__field"
							minLength="2" maxLength="200" required />
						<span className="popup__input-error profession-input-error"></span>
					</label>
				</PopupWithForm>

				<PopupWithForm name='add-image' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
					<label className="popup__label">
						<input type="text" name="name" placeholder="Название" id="place-input"
							className="popup__field popup__name-card" minLength="2" maxLength="30" required />
						<span className="popup__input-error place-input-error"></span>
					</label>
					<label className="popup__label">
						<input type="url" name="link" placeholder="Ссылка на картинку" id="link-input"
							className="popup__field popup__link-card" required />
						<span className="popup__input-error link-input-error"></span>
					</label>
				</PopupWithForm>

				<PopupWithForm name='add-image' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
					<label className="popup__label">
						<input type="url" name="avatar" placeholder="Ссылка" id="avatar-input" className="popup__field" required />
						<span className="popup__input-error avatar-input-error"></span>
					</label>
				</PopupWithForm>

				<PopupWithForm name='_id' title='Вы уверены?' onClose={closeAllPopups}>
					<input type="hidden" name="_id" className="popup__field" />
					<button type="submit" className="popup__button-save popup__button-yes">Да</button>
				</PopupWithForm>

				<PopupWithForm name='profil' title={'Alex'} isOpen={false} onClose={closeAllPopups}>
					<label className="popup__label">
						<input type="url" name="avatar" placeholder="Ссылка" id="avatar-input" className="popup__field" required />
						<span className="popup__input-error avatar-input-error"></span>
					</label>
				</PopupWithForm>

				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
			</div >
		</body >
	);
}

export default App;
