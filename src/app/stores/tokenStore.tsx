import { create } from "zustand";

type TokenState = {
    token: string | undefined;
    setToken:(token: string | undefined)=>void;
}

const useTokenState = create<TokenState>((set)=>({
    token:"",
    setToken:(token)=>set({token})
}))

export default useTokenState;