/**
 * =====================================================
 *  NAME    : Content.tsx
 *  DATE      : 23/09/2025
 *  DATE_MODIFY       : 25/09/2025
 *  DESCRIPTION: CONTENT FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import Section1 from "./Section1";
import Highlights from "./Highlights";
import Section2 from "./Section2";
import Section3 from "./Section3";

// LOGIC
type ContentProps = {
  t: (key: string) => string;
};

// CONTENT
const Content: React.FC<ContentProps> = ({ t }) => {
  return (
    <>
      <Section1 t={t} />
      <Highlights t={t} />
      <Section2 t={t} />
      <Section3 t={t} />
    </>
  );
};
export default Content;
