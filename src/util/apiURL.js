
export const apiURL = () => {
    if (process.env.NODE_ENV === "development") {  
        return 'http://localhost:3001'
    }; 
    return "";
}