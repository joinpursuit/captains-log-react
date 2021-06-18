export const apiURL = () => {
    return window.location.hostname === "localhost" ?
        "http://localhost:3001"
        :
        "https://thawing-woodland-27640.herokuapp.com"
}