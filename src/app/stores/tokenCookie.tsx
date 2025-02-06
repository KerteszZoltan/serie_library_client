import Cookies from "js-cookie";


const saveToken = (token: string) => {
  const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
  Cookies.set("token", token, { expires: inOneHour, secure: true, sameSite: "strict" });
};

const getToken = () => {
  return Cookies.get("token");
};

const removeToken = () => {
  Cookies.remove("token");
};

export { saveToken, getToken, removeToken };