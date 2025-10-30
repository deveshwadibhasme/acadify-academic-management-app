import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "./components/layouts/loading.jsx";
import AnimatedLogoLayout from "./components/layouts/AnimatedLogoLayout.jsx";

const App = lazy(() => import("./App.jsx"));
const LogInPage = lazy(() => import("./pages/logInPage.jsx"));
const SignUpPage = lazy(() => import("./pages/signUpPage.jsx"));

const root = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AnimatedLogoLayout className={`bg-gradient-to-tr from-teal-400 via-sky-400 to-logo-background`}>
        <Suspense fallback={<Loading />}>
          <LogInPage />
        </Suspense>
      </AnimatedLogoLayout>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <AnimatedLogoLayout className={`bg-gradient-to-tr from-teal-400 via-sky-400 to-logo-background`}>
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
