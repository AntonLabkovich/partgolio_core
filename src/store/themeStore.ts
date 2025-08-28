
import { create } from "zustand";
import { THEMES } from "../constants/theme";

export type Theme = (typeof THEMES)[number];

export interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    return storedTheme && THEMES.includes(storedTheme) ? storedTheme : THEMES[0];
};


export const useThemeStore = create<ThemeState>((set) => ({
    theme: getInitialTheme(),
    setTheme: (theme: Theme) => {
        if (!THEMES.includes(theme)) {
            console.warn(`Theme "${theme}" is not in the THEMES list.`);
            return;
        }
        localStorage.setItem("theme", theme);
        set({ theme });
    },
}));
