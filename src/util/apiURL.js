const apiURL = () => {
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
    return "http://localhost:9001";
  }

  return null;
};

export default apiURL;
