export const apiURL = () => {
  return window.location.hostname === 'localhost'
		? 'http://localhost:8080'
		: 'https://pure-sea-03440.herokuapp.com/'
}