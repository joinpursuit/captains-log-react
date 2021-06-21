export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3009"
      : "https://sheltered-island-89188.herokuapp.com";
  };