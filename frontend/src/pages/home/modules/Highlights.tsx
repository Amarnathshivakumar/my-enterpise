/**
 * =====================================================
 *  NAME    : Highlights.tsx
 *  DATE      : 24/08/2025
 *  DATE_MODIFY       : 24/08/2025
 *  DESCRIPTION: CONTENT HIGHLIGHTS HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";

// LOGIC
type HighlightsProps = {
  t: (key: string) => string;
};

// HIGHLIGHTS COMPONENT
const Highlights: React.FC<HighlightsProps> = ({ t }) => {
  return (
    <div className="bg-white w-full text-black dark:bg-gray-800 dark:text-white">
      <h2>{t("home.highlights")}</h2>
    </div>
  );
};

export default Highlights;
