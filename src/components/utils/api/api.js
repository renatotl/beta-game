const baseUrl = "https://backend-game-rdj.herokuapp.com";

export const jogoRDJ = {
  registerUser: async (userBody) => {
    const response = await fetch(baseUrl + "/initial/registration", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...userBody }),
    });
    const data = await response.json();
    return data;
  },

  login: async (userBody) => {
    const response = await fetch(baseUrl + "/login/entrar", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...userBody }),
    });
    const data = await response.json();
    localStorage.setItem("userToken", data.token);
    return data;
  },
};
