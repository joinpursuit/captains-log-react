export const apiURL = () => {
    console.log(window.location)
    return window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://sheltered-island-89188.herokuapp.com";
  };