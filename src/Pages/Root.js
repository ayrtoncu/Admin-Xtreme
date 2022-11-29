import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import DashboardScrean from "../Screens/DashboardScrean";
import { AuthProvider } from "../services/AuthProvider";
import PrivateRoute from "../services/PrivateRoute";
import SignInSide from "./Login";

const Root = (props) => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <SignInSide />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
  ]);
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignInSide />}></Route>
            <Route exact path="/" element={<PrivateRoute />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default Root;
