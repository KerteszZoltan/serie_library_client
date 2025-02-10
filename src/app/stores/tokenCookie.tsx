import Cookies from "js-cookie";


const saveToken = (token: string) => {
  const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
  const cleanedToken = token.replace(/^"|"$/g, '');
  Cookies.set("SESSION-TOKEN", cleanedToken, { expires: inOneHour, secure: true, sameSite: "strict" });
};

const getToken = () => {
  return Cookies.get("SESSION-TOKEN");
};

const removeToken = () => {
  Cookies.remove("SESSION-TOKEN");
};

export { saveToken, getToken, removeToken };