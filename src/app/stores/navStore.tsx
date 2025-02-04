import {create} from "zustand";
import { persist } from "zustand/middleware";

type NavigationState={
    active:string;
    setActive:(active:string)=>void
}

const useNavigationStore = create<NavigationState>()(persist(
    (set)=>({
        active : '',
        setActive : (active:string)=>set({active})
    }),
    {
        name:"nav-storage",
    }
)
);

export default useNavigationStore;