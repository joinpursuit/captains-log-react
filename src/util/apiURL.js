export const apiURL = () => {
  //If youre on localhost, api Url makes request 
    return window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://sheltered-island-89188.herokuapp.com";
  };