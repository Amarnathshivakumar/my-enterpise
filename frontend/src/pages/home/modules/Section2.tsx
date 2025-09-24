/**
 * =====================================================
 *  NAME    : Content.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 24/09/2025
 *  DESCRIPTION: CONTENT FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";

// LOGIC
type Section2Props = {
  t: (key: string) => string;
};

// SECTION 2
const Section2: React.FC<Section2Props> = ({ t }) => {
  return (
    <section className="h-dvh bg-gray-800 grid grid-cols-2">
      <article className="flex flex-col justify-center items-start p-20 space-y-4">
        <h3 className="font-bold text-6xl">{t("home.text-3")}</h3>
        <p className="text-2xl font-light">{t("home.text-4")}</p>
        <p>{t("words.view")}</p>
      </article>
      <div className="bg-gray-800">
        <img
          src="/img/img-1.png"
          alt="image"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Section2;
