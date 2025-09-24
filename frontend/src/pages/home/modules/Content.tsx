/**
 * =====================================================
 *  NAME    : Content.tsx
 *  DATE      : 23/09/2025
 *  DATE_MODIFY       : 24/09/2025
 *  DESCRIPTION: CONTENT FOR HOME PAGE
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import Section1 from "./Section1";
import Highlights from "./Highlights";
import Section2 from "./Section2";

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
    </>
  );
};
export default Content;
