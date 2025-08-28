import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Loadable from "./components/Loadable";
import DashboardLayout from "./components/Layout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Dasboard
const TaskPage = Loadable(lazy(() => import("./pages/Task")));
const QuoatesPage = Loadable(lazy(() => import("./pages/Quotes")));

// Login & Register
const LoginPage = Loadable(lazy(() => import("./pages/Login")));
const RegisterPage = Loadable(lazy(() => import("./pages/Register")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/task" replace />,
      },
      {
        path: "/task",
        element: <TaskPage />,
      },
      {
        path: "/quotes",
        element: <QuoatesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
