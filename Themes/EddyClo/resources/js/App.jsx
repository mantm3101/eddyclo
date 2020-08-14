import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import { HOME, SHOP, LOGIN } from "../constants/routes";
import { fetchProfile } from "./store/logic/profile";
import { connect } from "react-redux";
import { useEffect } from "react";

const App = ({fetchProfile}) => {

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    return (
        <div>
            <Switch>
                <Route exact path={[HOME, "/"]}>
                    <Home />
                </Route>
                <Route exact path={SHOP}>
                    <Shop />
                </Route>
                <Route exact path={LOGIN}>
                    <Login />
                </Route>
            </Switch>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    fetchProfile : () => dispatch(fetchProfile())
});

export default connect(null, mapDispatchToProps)(App);
