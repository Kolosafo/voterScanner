import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const renderRoute = (route: AppRouteType, index: number): JSX.Element => {
  return <Route key={index} path={route.to} element={<route.element />} />;
};
import "./App.css";
import NavMenu from "./components/Navbar";
import { appRoutes, AppRouteType } from "./route/app";

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        {appRoutes.map((route, index) => renderRoute(route, index))}
      </Routes>
    </Router>
  );
}

export default App;
