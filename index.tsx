import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import LameForm from "./components/LameForm";
import ReduxExampleJS from "./components/ReduxExampleJS";
import ReduxExampleTS from "./components/ReduxExampleTS";

function App() {
  return (
    <main>
      <h1>Socrata TypeScript Demo</h1>
      <div>
        <Link to="/">LameForm</Link> |{" "}
        <Link to="/redux_js">Redux Example in JS</Link> |{" "}
        <Link to="/redux_ts">Redux Example in TS</Link>
      </div>
      <Router>
        <LameForm path="/" />
        <ReduxExampleJS path="/redux_js" />
        <ReduxExampleTS path="/redux_ts" />
      </Router>
    </main>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
