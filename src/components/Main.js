

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

	return (
		<main>
			<section className="profile">
				<div className="profile__info">
					<div className="profile__edit-avatar" onClick={onEditAvatar}>
						<img className="profile__pencil" src="<%=require('./images/edit-avatar.svg')%>" alt="Аватар" />
						<img className="profile__avatar" src="<%=require('./images/Avatar.jpg')%>" alt="Аватар" />
					</div>
					<div>
						<div className="profile__name-and-edit">
							<h1 className="profile__name">Жак-Ив Кусто</h1>
							<button type="button" className="profile__edit" onClick={onEditProfile}></button>
						</div>
						<p className="profile__sub-name">Исследователь океана</p>
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

