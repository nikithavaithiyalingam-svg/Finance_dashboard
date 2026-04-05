import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

const loadTheme = (): Theme => {
  const stored = localStorage.getItem('theme');
  if (stored) return stored as Theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const saveTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: loadTheme(),
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      saveTheme(newTheme);
      return newTheme;
    },
    setTheme: (_state, action: PayloadAction<Theme>) => {
      saveTheme(action.payload);
      return action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;