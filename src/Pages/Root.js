import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { AuthProvider } from "../services/AuthProvider";
import PrivateRoute from "../services/PrivateRoute";
import SignInSide from "./Login";

const Root = (props) => {
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
