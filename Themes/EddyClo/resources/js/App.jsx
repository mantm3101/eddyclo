import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const HOME = "/home";
const ABOUT_ME = "/about-me";

const HOME_PAGE = () => {
    const date = new Date();
    return (
        <div>
            <h1>Hello World</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    );
};

const ABOUT_ME_PAGE = () => <div>This is about me page</div>;

const App = () => (
    <div>
        <Link to={HOME}>To Home</Link>
        <Link to={ABOUT_ME}>To About Me</Link>
        <Switch>
            <Route path={[HOME, "/"]}>
                <HOME_PAGE />
            </Route>
            <Route path={ABOUT_ME}>
                <ABOUT_ME_PAGE />
            </Route>
        </Switch>
    </div>
);

export default App;
