import {create} from "zustand";

type PasswordRule = {
    rule: string;
    isValid: boolean;
  };
  
  type PasswordState = {
    password: string;
    rules: PasswordRule[];
    setPassword: (password: string) => void;
    validatePasswordOnChange: (password: string) => void;
  };
  
  const usePasswordStore = create<PasswordState>((set) => ({
    password: "",
    rules: [
      { rule: "At least 8 characters", isValid: false },
      { rule: "At least one uppercase letter", isValid: false },
      { rule: "At least one lowercase letter", isValid: false },
      { rule: "At least one number", isValid: false },
      { rule: "At least one special character", isValid: false },
    ],
    setPassword: (password: string) =>
      set({ password }),
    validatePasswordOnChange: (password: string) => {
      const minLength = 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      const rules: PasswordRule[] = [
        { rule: "At least 8 characters", isValid: password.length >= minLength },
        { rule: "At least one uppercase letter", isValid: hasUppercase },
        { rule: "At least one lowercase letter", isValid: hasLowercase },
        { rule: "At least one number", isValid: hasNumber },
        { rule: "At least one special character", isValid: hasSpecialChar },
      ];
  
      set({ password, rules });
    },
  }));
  
  export default usePasswordStore;