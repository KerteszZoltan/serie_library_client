import { create } from "zustand"

type CookieState = {
    cookie:string,
    setCookie:(cookie:string)=>void,
}

const useCookieStore = create<CookieState>((set)=>({
    cookie: "",
    setCookie: (cookie:string)=>set({cookie}),
}));

export default useCookieStore;