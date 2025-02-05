import Cookies from "js-cookie";


const saveToken = (token: string) => {
  Cookies.set("token", token, { expires: 1, secure: true, sameSite: "strict" });
};

const getToken = () => {
  return Cookies.get("token");
};

const removeToken = () => {
  Cookies.remove("token");
};

export { saveToken, getToken, removeToken };