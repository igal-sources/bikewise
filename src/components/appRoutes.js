import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "../components/main-container/not-found-page/NotFoundPage";
import BikesBoard from "./bike-thefts-container/bikes-board/BikesBoard";


export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BikesBoard} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
