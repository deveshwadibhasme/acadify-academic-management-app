import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./components/layouts/Loading.jsx";
import AnimatedLogoLayout from "./components/layouts/AnimatedLogoLayout.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import StudentBoard from "./pages/StudentBoard.jsx";
import AlumniBoard from "./pages/AlumniBoard.jsx";

const App = lazy(() => import("./App.jsx"));
const LogInPage = lazy(() => import("./pages/LogInPage.jsx"));
const SignUpPage = lazy(() => import("./pages/SignUpPage.jsx"));

const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </AuthProvider>
    ),
    children: [
      {
        path: "/student",
        element: (
            <Suspense fallback={<Loading />}>
              <StudentBoard />
            </Suspense>
        ),
      },
      {
        path: "/alumni",
        element: (
            <Suspense fallback={<Loading />}>
              <AlumniBoard />
            </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <AnimatedLogoLayout>
          <Suspense fallback={<Loading />}>
            <LogInPage />
          </Suspense>
        </AnimatedLogoLayout>
      </AuthProvider>
    ),
  },
  {
    path: "/signup",
    element: (
      <AnimatedLogoLayout>
        <Suspense fallback={<Loading />}>
          <SignUpPage />
        </Suspense>
      </AnimatedLogoLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={root} />
  </>
);
