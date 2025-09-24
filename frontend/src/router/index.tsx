/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: ROUTER FOR REACT
 * =====================================================
 */

// DEPENDENCIES
import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/home";
import NotFoundPage from "@/pages/not-found";
import { useTranslation } from "react-i18next";

// ROUTES
export const Router: React.FC = () => {
  const { t } = useTranslation();
  const routes = [
    {
      path: "/",
      element: <Home t={t} />,
    },
    {
      path: "*",
      element: <NotFoundPage t={t} />,
    },
  ];
  return useRoutes(routes);
};

export default Router;