
export const apiURL = () => {
    if (window.location.hostname === "localhost") {
        return "http://localhost:3456"
    } else {
        return "https://sheltered-island-89188.herokuapp.com"
    }
}