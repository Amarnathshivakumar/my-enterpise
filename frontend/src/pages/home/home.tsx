/**
 * =====================================================
 *  NAME    : home.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 23/09/2025
 *  DESCRIPTION: PAGE HOME
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "@/components/containers/NavBar";
import Content from "./modules/Content";
import backgroundImage from "/img/bg-web.jpg";

// HOME PAGE
const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };
  return (
    <>
      {/* NAVBAR */}
      <NavBar t={t} />
      {/* MAIN CONTENT */}
      <main className="relative flex flex-col justify-center text-white p-6 max-w-screen max-h-screen h-dvh">
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
        <Content t={t} changeLanguage={changeLanguage} />
      </main>
    </>
  );
};
export default Home;