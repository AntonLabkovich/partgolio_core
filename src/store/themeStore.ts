import { create } from "zustand";

export interface ThemeState {
    isDarkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

const getInitialTheme = (): boolean => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme === "true"; // по умолчанию false, если ничего нет
};

export const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: getInitialTheme(),
    setDarkMode: (value: boolean) => {
        localStorage.setItem("isDarkMode", value.toString());
        set({ isDarkMode: value });
    },
}));