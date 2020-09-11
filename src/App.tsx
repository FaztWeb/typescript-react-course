import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import { BasicProps } from "./basics/BasicProps";
import MyDiv from "./libraries/MyDiv";
import { Posts } from "./fetch/Posts";

function App(): JSX.Element {
  return (
    <>
      <Router>
        List of Topics
        <ul>
          <li>
            <Link to="basic-props">Basic Props</Link>
          </li>
          <li>
            <Link to="fetch">Fetch Data</Link>
          </li>
          <li>
            <Link to="libraries">Libraries</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" render={() => <h1>Choose a topic</h1>} />
          <Route path="/basic-props" component={BasicProps} />
          <Route path="/fetch" component={Posts} />
          <Route path="/libraries" component={MyDiv} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
