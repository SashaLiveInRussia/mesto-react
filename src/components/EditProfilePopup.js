import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
	const currentUser = useContext(CurrentUserContext);
	const [name, setName] = useState(null);
	const [description, setDescription] = useState(null);

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeDescription(e) {
		setDescription(e.target.value)
	}

	function handleSubmit(e) {
		// Запрещаем браузеру переходить по адресу формы
		e.preventDefault();

		// Передаём значения управляемых компонентов во внешний обработчик
		onUpdateUser({
			name,
			about: description,
		});
	}

	useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	return (
		<PopupWithForm onSubmit={handleSubmit} name='profil' title='Редактировать профиль' isOpen={isOpen} onClose={onClose}>
			<label className="popup__label">
				<input type="text" name="name" placeholder="Имя" id="name-input" className="popup__field" minLength="2"
					maxLength="40" required value={name} onChange={handleChangeName} />
				<span className="popup__input-error name-input-error"></span>
			</label>
			<label className="popup__label">
				<input type="text" name="about" placeholder="Профессия" id="profession-input" className="popup__field"
					minLength="2" maxLength="200" required value={description} onChange={handleChangeDescription} />
				<span className="popup__input-error profession-input-error"></span>
			</label>
		</PopupWithForm>
	)
}

export default EditProfilePopup