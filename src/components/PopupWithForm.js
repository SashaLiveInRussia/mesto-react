function PopupWithForm({ name, title, children, isOpen }) {
	return (
		<div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__body">
				<button type="button" className="popup__close-popup"></button>
				<h2 className="popup__title">{title}</h2>
				<form className="form" name={name} novalidate>
					{children}
					<button type="submit" className="popup__button-save">Сохранить</button>
				</form>
			</div>
		</div>
	)
}

export default PopupWithForm