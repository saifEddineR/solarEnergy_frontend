const setToken = () => {
  return (
    localStorage.getItem('token') && {
      headers: { token: localStorage.getItem('token') },
    }
  );
};
export default setToken;
