import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import HomePage from "../HomePage/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ApplicationFormPage">
          <ApplicationFormPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
