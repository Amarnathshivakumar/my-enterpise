/**
 * =====================================================
 *  NAME    : ThemeProvider.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 22/09/2025
 *  DESCRIPTION: THEME PROVIDER FOR DARK MODE AND LIGHT MODE
 * =====================================================
 */

// DEPENDENCIES
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme, Theme } from "@/store/themeState";
import { AppDispatch } from "@/store";

// THEME PROVIDER COMPONENT
interface ThemeProviderProps {
  children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    dispatch(setTheme(savedTheme));
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, [dispatch]);
  return <>{children}</>;
};
export default ThemeProvider;
