// C:\App-Repository-Week-4\src\store\themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeName = "light" | "dark" | "custom";

export type ThemeState = {
  mode: ThemeName;
  accentColor: string;
  background: string;
  card: string;
  text: string;
  inputBackground: string;
};

const lightTheme: ThemeState = {
  mode: "light",
  accentColor: "#1DB954",
  background: "#ffffff",
  card: "#f5f5f5",
  text: "#000000",
  inputBackground: "#f0f0f0",
};

const darkTheme: ThemeState = {
  mode: "dark",
  accentColor: "#1DB954",
  background: "#000000",
  card: "#111111",
  text: "#ffffff",
  inputBackground: "#111111",
};

const createCustomTheme = (accent: string): ThemeState => ({
  ...darkTheme,
  mode: "custom",
  accentColor: accent,
});

const initialState: ThemeState = darkTheme;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode(state, action: PayloadAction<ThemeName>) {
      if (action.payload === "light") {
        return lightTheme;
      }
      if (action.payload === "dark") {
        return darkTheme;
      }
      // keep current accent when switching to custom without color
      return createCustomTheme(state.accentColor);
    },
    setAccentColor(state, action: PayloadAction<string>) {
      return createCustomTheme(action.payload);
    },
    setHydratedTheme(_state, action: PayloadAction<ThemeState>) {
      return action.payload;
    },
  },
});

export const { setThemeMode, setAccentColor, setHydratedTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
