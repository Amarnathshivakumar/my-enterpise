/**
 * =====================================================
 *  NAME    : home.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: PAGE HOME
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/containers/NavBar";

// HOME PAGE
const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };
  return (
    <>
      <NavBar/>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-slate-900 text-white p-6">
        <h1 className="mb-8 text-center text-6xl font-light">
          {t("home.get_started")}
        </h1>
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Select language:</p>
          <div className="flex gap-4">
            <button
              className="rounded bg-fuchsia-500 px-4 py-2 font-medium text-white hover:bg-fuchsia-600"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="rounded border border-white px-4 py-2 font-medium text-white hover:bg-white hover:text-slate-900"
              onClick={() => changeLanguage("es")}
            >
              Español
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
