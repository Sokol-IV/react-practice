import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageTwo from "./components/PageTwo/PageTwo";
import PageOne from "./components/PageOne/PageOne";
import NotFound from "./components/NotFound/NotFound";
import {Router as RemixRouter} from "@remix-run/router/dist/router";

const router: RemixRouter = createBrowserRouter([
    {
        path: "/",
        element:  <PageOne />,
    },
    {
        path: "two",
        element: <PageTwo />,
    },
    {
        path: "*",
        element:  <NotFound />,
    },
]);

const App: React.FC = (): JSX.Element => {
    return <RouterProvider router={router} />;
};

export default App;