/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 27/09/25
 *  DESCRIPTION: ROUTER FOR REACT
 * =====================================================
 */

// DEPENDENCIES
import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "@/router/ProtectedRoute";
import { useTranslation } from "react-i18next";
import "../assets/css/loading.css";
import Loading from "@/components/containers/Loading";

// LOGIC
const Home = lazy(() => import("@/pages/home/home"));
const NotFoundPage = lazy(() => import("@/pages/not-found"));
const Login = lazy(() => import("@/pages/link/Login"));
const Register = lazy(() => import("@/pages/link/Register"));
const Dashboard = lazy(() => import("@/pages/client/Dashboard"));

// ROUTES
export const Router: React.FC = () => {
  const { t } = useTranslation();
  const routes = [
    { path: "/", element: <Home t={t} /> },
    { path: "/login", element: <Login t={t} /> },
    { path: "/register", element: <Register t={t} /> },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute requireBothTokens={true}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <NotFoundPage t={t} /> },
  ];
  return <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>;
};
export default Router;
