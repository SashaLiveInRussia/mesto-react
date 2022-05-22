import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'


function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

	function closeAllPopups() {
		{
			setIsEditProfilePopupOpen(false)
			setIsAddPlacePopupOpen(false)
			setIsEditAvatarPopupOpen(false)
		}
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

	return (
		<body className="body">
			<Header />
			<div className="page">
				<Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
				<Footer />
				<PopupWithForm name='profil' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
					<label className="popup__label">
						<input type="text" name="name" placeholder="Имя" id="name-input" className="popup__field" minlength="2"
							maxlength="40" required />
						<span className="popup__input-error name-input-error"></span>
					</label>
					<label className="popup__label">
						<input type="text" name="about" placeholder="Профессия" id="profession-input" className="popup__field"
							minlength="2" maxlength="200" required />
						<span className="popup__input-error profession-input-error"></span>
					</label>
				</PopupWithForm>

				<PopupWithForm name='add-image' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={false}>
					<label className="popup__label">
						<input type="text" name="name" placeholder="Название" id="place-input"
							className="popup__field popup__name-card" minlength="2" maxlength="30" required />
						<span className="popup__input-error place-input-error"></span>
					</label>
					<label className="popup__label">
						<input type="url" name="link" placeholder="Ссылка на картинку" id="link-input"
							className="popup__field popup__link-card" required />
						<span className="popup__input-error link-input-error"></span>
					</label>
				</PopupWithForm>


				<PopupWithForm name='image-view' title='Редактировать профиль' isOpen={isEditAvatarPopupOpen} onClose={false}>
					<input type="hidden" name="_id" className="popup__field" />
				</PopupWithForm>

				<PopupWithForm name='profil' title={'Alex'} isOpen={false} onClose={false}>
					<label className="popup__label">
						<input type="url" name="avatar" placeholder="Ссылка" id="avatar-input" className="popup__field" required />
						<span className="popup__input-error avatar-input-error"></span>
					</label>
				</PopupWithForm>

				<template className="template__element">
					<div className="element">
						<div className="element__delete"></div>
						<img className="element__img" src="./images/Karachaevo.jpg" alt="Карачево" />
						<div className="element__info">
							<h2 className="element__title">Карачаевск</h2>
							<div className="element__likes">
								<button type="button" className="element__like"></button>
								<span type="number" className="element__like-number">0</span>
							</div>
						</div>
					</div>
				</template>

			</div >
		</body >
	);
}

export default App;
