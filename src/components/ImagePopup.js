function ImagePopup() {
	return (
		<div className="popup popup_image-view">
			<div className="popup__image-container">
				<img className="popup__image"
					src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg" alt="Image" />
				<h2 className="popup__image-title">Alex</h2>
				<button type="button" className="popup__close-popup"></button>
			</div>
		</div>
	)
}