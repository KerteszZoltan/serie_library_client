import {create} from "zustand";

type NavigationState={
    active:string;
    setActive:(active:string)=>void
}

const useNavigationStore = create<NavigationState>((set)=>({
    active : '',
    setActive : (active:string)=>set({active})
}));

export default useNavigationStore;