const getConfigAuth = () => {
  return {
    headers: {
      Autorization: `Bearer ${"hola"}`,
    },
  };
};

export default getConfigAuth;
