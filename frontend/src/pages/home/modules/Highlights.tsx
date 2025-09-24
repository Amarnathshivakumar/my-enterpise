/**
 * =====================================================
 *  NAME    : Highlights.tsx
 *  DATE      : 24/09/2025
 *  DATE_MODIFY       : 24/09/2025
 *  DESCRIPTION: CONTENT HIGHLIGHTS HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import modularIcon from "/svg/modular-icon.svg";
import opensourceIcon from "/svg/opensource-icon.svg";
import groupIcon from "/svg/group-icon.svg";
import secureIcon from "/svg/secure-icon.svg";
import serverIcon from "/svg/server-icon.svg";

// LOGIC
type HighlightsProps = {
  t: (key: string) => string;
};

// HIGHLIGHTS COMPONENT
const Highlights: React.FC<HighlightsProps> = ({ t }) => {
  return (
    <section className="bg-gray-300 w-full text-black dark:bg-black dark:text-white h-[45vh] flex flex-col items-center">
      <h2
        className="font-light text-5xl lilita-one"
        style={{ paddingTop: "3%" }}
      >
        {t("home.highlights")}
      </h2>
      <div
        className="flex flex-row justify-center items-start gap-5 w-full sm:gap-7 md:gap-20"
        style={{ paddingTop: "3%" }}
      >
        <div className="flex flex-col items-center">
          <img
            src={modularIcon}
            alt="icon"
            className="w-auto h-24 dark:invert"
          />
          <p className="font-black font-[Montserrat]">Modular</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={opensourceIcon}
            alt="icon"
            className="w-auto h-24 dark:invert"
          />
          <p className="font-black font-[Montserrat]">
            {t("home.open-source")}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={groupIcon} alt="icon" className="w-auto h-24 dark:invert" />
          <p className="font-black font-[Montserrat]">{t("home.i-t-c")}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={secureIcon}
            alt="icon"
            className="w-auto h-24 dark:invert"
          />
          <p className="font-black font-[Montserrat]">{t("home.secure")}</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={serverIcon}
            alt="icon"
            className="w-auto h-24 dark:invert"
          />
          <p className="font-black font-[Montserrat]">{t("home.host")}</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
