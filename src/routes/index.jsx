import { createBrowserRouter, Navigate } from "react-router-dom";
import Claims from "../pages/Claims";
import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import AccountPage from "../pages/AccountPage";
import SupportPage from "../pages/SupportPage";
import DevicesPage from "../pages/DevicesPage";
import DeviceDetailPage from "../pages/DeviceDetailPage";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/claims",
        element: <Claims />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
      {
        path: "/devices",
        element: <DevicesPage />,
      },
      {
        path: "/devices/:id",
        element: <DeviceDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
