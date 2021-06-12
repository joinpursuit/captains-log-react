
export const apiURL = () => {
    if (process.env.NODE_ENV === "development"){  // development // production // test
        return 'http://localhost:3001'
    }; 
    return "";
}