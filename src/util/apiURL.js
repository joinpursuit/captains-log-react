export const apiUrl = () => { 
    return window.location.hostname === "localhost"
    ? "http://localhost:3005"
    : "https://github.com"
 }
