/**
 * =====================================================
 *  NAME    : Section1.tsx
 *  DATE      : 24/08/2025
 *  DATE_MODIFY       : 24/08/2025
 *  DESCRIPTION: CONTENT SECTION 1 HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonLang from "@/components/containers/ButtonLang";

// LOGIC
type Section1Props = {
  t: (key: string) => string;
};

// SECTION 1
const Section1: React.FC<Section1Props> = ({ t }) => {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen w-full flex flex-col justify-center p-6">
      <div className="relative text-left p-6 max-w-3xl left-0 md:left-1/12 2xl:left-2/10">
        <h1 className="mb-4 text-6xl font-[Montserrat] font-medium">
          {t("home.text-1")}
        </h1>
        <p className="mb-8 text-4xl font-light">{t("home.text-2")}</p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <button
              className="rounded bg-accent px-4 py-2 font-medium text-black dark:text-white"
              onClick={() => navigate("/login")}
            >
              {t("words.login")}
            </button>
            <button
              className="rounded border-2 px-4 py-2 font-medium"
              onClick={() => navigate("/register")}
            >
              {t("words.register")}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <ButtonLang t={t} />
      </div>
    </section>
  );
};
export default Section1;
