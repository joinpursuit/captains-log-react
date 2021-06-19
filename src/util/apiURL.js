export const apiURL = () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    return 'http://localhost:5005';
  }
  return null;
};

