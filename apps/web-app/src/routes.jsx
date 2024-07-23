import { lazy } from "react";
import { Navigate } from "react-router-dom";

const DashboardLayout = lazy(() => import("./layouts/dashboard"));
const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const GoalTracker = lazy(() => import("./pages/goalTracker"));
const Feedback = lazy(() =>import("./pages/feedback"));
const Engagement = lazy(() =>import("./pages/engagement"));
const Profile = lazy(() =>import("./pages/profile"));


const routes = [
  {
    path: "/",
    element: (
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    ),
  },

  {
  path: "/dashboard",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },

  {
    path: "/goal-tracker",
      element: (
        <DashboardLayout>
          <GoalTracker />
        </DashboardLayout>
      ),
  },

  {
    path: "/feedback",
      element: (
        <DashboardLayout>
          <Feedback />
        </DashboardLayout>
      ),
  },

  {
    path: "/engagement",
      element: (
        <DashboardLayout>
          <Engagement />
        </DashboardLayout>
      ),
  },

  {
    path: "/profile",
      element: (
        <DashboardLayout>
          <Profile />
        </DashboardLayout>
      ),
  },

  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
];

export default routes;