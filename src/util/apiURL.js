export const apiURL = () => {
  console.log(window.location);
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "BookMarksAPILINK";
};
