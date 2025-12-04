import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./components/layouts/Loading.jsx";
import AnimatedLogoLayout from "./components/layouts/AnimatedLogoLayout.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import StudentBoard from "./pages/studentBoard.jsx";
import AlumniBoard from "./pages/alumniBoard.jsx";

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
          <AnimatedLogoLayout>
            <Suspense fallback={<Loading />}>
              <StudentBoard />
            </Suspense>
          </AnimatedLogoLayout>
        ),
      },
      {
        path: "/alumni",
        element: (
          <AnimatedLogoLayout>
            <Suspense fallback={<Loading />}>
              <AlumniBoard />
            </Suspense>
          </AnimatedLogoLayout>
        ),
      },
    ],
  },
  {
        path: "/login",
        element: (
          <AnimatedLogoLayout>
            <Suspense fallback={<Loading />}>
              <LogInPage />
            </Suspense>
          </AnimatedLogoLayout>
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
