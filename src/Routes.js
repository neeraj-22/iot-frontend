import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

//Importing Components
import Homepage from "./pages/Homepage";
import Team from "./pages/Team";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/dashboard' exact element={<Dashboard/>} />
        <Route path='/team' exact element={<Team/>} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
