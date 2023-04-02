export const THEME_TYPES = {
    THEME_DARK: "dark",
    THEME_LIGHT: "light",
};

// for tailwind css, need the change the root
export const applyThemePreference = (theme: string) => {
    const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
    const root = window.document.documentElement;
    const isDark = theme === THEME_DARK;
    root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
    root.classList.add(theme);
};