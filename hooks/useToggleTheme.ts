import { create } from "zustand";

interface ToggleThemeStore {
    isDark: boolean,
    toggle: () => void,
}

const useToggleTheme = create<ToggleThemeStore>((set) => ({
    isDark: false,
    toggle: () =>
        set((state) => ({
            isDark: !state.isDark,
        })),
}))

export default useToggleTheme