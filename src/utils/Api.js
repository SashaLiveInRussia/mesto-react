import Api from './utils'

const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
	headers: {
		authorization: 'adaf3729-939a-4351-9992-562ebfc14bb0',
		'Content-Type': 'application/json'
	}
});

export default api;
