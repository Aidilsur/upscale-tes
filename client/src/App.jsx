import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./components/Layout";
import Loadable from "./components/Loadable";

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
        <ToastContainer
          position="top-right"
          autoClose={3000} // durasi toast muncul (ms)
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
