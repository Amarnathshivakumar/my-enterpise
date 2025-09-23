/**
 * =====================================================
 *  NAME    : ThemeProvider.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 23/09/2025
 *  DESCRIPTION: THEME PROVIDER FOR DARK MODE AND LIGHT MODE
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme, Theme } from "@/store/tasks/themeState";
import { AppDispatch } from "@/store";

// THEME PROVIDER COMPONENT
interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    let savedTheme = localStorage.getItem("theme") as Theme | null;
    if (!savedTheme) {
      savedTheme = "light";
      localStorage.setItem("theme", savedTheme);
    }
    dispatch(setTheme(savedTheme));
  }, [dispatch]);
  return <>{children}</>;
};
export default ThemeProvider;