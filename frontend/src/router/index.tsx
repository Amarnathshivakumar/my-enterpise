/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 26/09/25
 *  DESCRIPTION: ROUTER FOR REACT
 * =====================================================
 */

// DEPENDENCIES
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "@/components/containers/Loading";
import "../assets/css/loading.css";

// LOGIC
const Home = lazy(() => import("@/pages/home/home"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));

// ROUTES
export const Router: React.FC = () => {
  const { t } = useTranslation();
  const routes = [
    { path: "/", element: <Home t={t} /> },
    { path: "*", element: <NotFoundPage t={t} /> },
  ];
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
};
export default Router;
