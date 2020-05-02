import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { HOME, SHOP } from "../constants/routes";


const App = () => (
    <div>
        <Switch>
            <Route exact path={[HOME, "/"]}>
                <Home />
            </Route>
            <Route exact path={SHOP}>
                <Shop />
            </Route>
        </Switch>
    </div>
);

export default App;
