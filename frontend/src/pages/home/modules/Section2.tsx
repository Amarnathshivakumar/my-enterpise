/**
 * =====================================================
 *  NAME    : Section2.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 25/09/2025
 *  DESCRIPTION: SECTION 2 FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import { Button } from "@/components/ui/button";

// LOGIC
type Section2Props = {
  t: (key: string) => string;
};

// SECTION 2
const Section2: React.FC<Section2Props> = ({ t }) => {
  return (
    <section className="min-h-dvh bg-gray-950 grid grid-cols-2 border-blur">
      <article className="flex flex-col justify-center items-start lg:p-20 space-y-4 z-1">
        <h3 className="font-bold lg:text-6xl">{t("home.text-3")}</h3>
        <p className="lg:text-2xl font-light">{t("home.text-4")}</p>
        <Button className="rounded bg-accent px-10 md-4 lg:px-20 lg:py-7 font-bold text-3xl">
          {t("words.view")}
        </Button>
      </article>
      <div className="bg-gray-950 z-1">
        <img
          src="/img/img-1.png"
          alt="image"
          className="w-full h-full object-contain dark:invert-90"
        />
      </div>
    </section>
  );
};
export default Section2;
