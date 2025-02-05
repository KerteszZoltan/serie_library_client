import { create } from "zustand";

type usernametype ={
    username:string,
    setUsername:(username:string)=>void;
}

const useUsernameStore=create<usernametype>((set)=>({
    username:'',
    setUsername:(username)=>set({username})
}));

export {useUsernameStore};