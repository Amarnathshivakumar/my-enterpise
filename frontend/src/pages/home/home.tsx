/**
 * =====================================================
 *  NAME    : home.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 22/09/2025
 *  DESCRIPTION: PAGE HOME
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/containers/NavBar";
import { useTheme } from "@/hooks/useTheme";
import backgroundImage from "/img/bg-web.jpg";

// HOME PAGE
const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };
  const { theme, toggle } = useTheme();
  return (
    <>
      {/* NAVBAR */}
      <NavBar t={t} />
      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center justify-center text-white p-6 max-w-screen max-h-screen min-h-screen">
        {/* BACKGROUND */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        </div>
        {/* WELCOME CONTENT */}
        <h1 className="mb-8 text-center text-6xl font-light">
          {t("home.get_started")}
        </h1>
        <div className="text-center">
          <p>
            {t("home.theme")} {theme}
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Select language:</p>
          <div className="flex gap-4">
            <button
              className="rounded bg-accent px-4 py-2 font-medium text-black"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="rounded border-2 px-4 py-2 font-medium"
              onClick={() => changeLanguage("es")}
            >
              Español
            </button>
          </div>
          <button
            onClick={toggle}
            className="px-4 py-2 rounded bg-accent text-black"
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
