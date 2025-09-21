/**
 * =====================================================
 *  NAME    : index.tsx
 *  DATE      : 20/08/2025
 *  DATE_MODIFY       : 21/09/25
 *  DESCRIPTION: ROUTER FOR REACT
 * =====================================================
 */

// DEPENDENCIES
import { useRoutes } from "react-router-dom";
import Home from "@/pages/home/home";
import NotFoundPage from "@/pages/not-found";

// ROUTES
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export const Router: React.FC = () => {
  return useRoutes(routes);
};
export default Router;
