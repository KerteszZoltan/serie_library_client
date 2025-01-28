import {create} from "zustand";

type EmailState = {
  email: string;
  error: string | null;
  setEmail: (email: string) => void;
  validateEmailOnChange: (email: string) => void;
};

const useEmailStore = create<EmailState>((set) => ({
  email: "",
  error: null,
  setEmail: (email: string) =>
    set({ email, error: null }),
  validateEmailOnChange: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    set({
      email,
      error: emailRegex.test(email) ? null : "Invalid email format",
    });
  },
}));

export default useEmailStore;