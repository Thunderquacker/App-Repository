// C:\App-Repository-Week-4\src\theme\useTheme.ts
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useThemeColors() {
  const theme = useSelector((state: RootState) => state.theme);
  return theme;
}
