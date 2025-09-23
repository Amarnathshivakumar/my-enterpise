/**
 * =====================================================
 *  NAME    : NavBar.tsx
 *  DATE      : 22/09/2025
 *  DATE_MODIFY       : 22/09/2025
 *  DESCRIPTION: NAVIGTAION BAR COMPONENT
 * =====================================================
 */

// DEPENDENCIES
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

// COMPONENT
const NavBar = () => {
  const { theme, toggle } = useTheme();
  return (
    <>
      <button onClick={toggle} className="px-4 py-2 rounded bg-accent">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Button onClick={() => alert("Hola mundo!")}>Click me</Button>
    </>
  );
};
export default NavBar;
