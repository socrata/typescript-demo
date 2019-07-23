import React, { Component } from "react";
import { createStore, compose } from "redux";

/**
 * Quick note:
 * This project is using the absolutely wonderful reach router for its routing
 * https://reach.tech/router
 *
 * This import is solely to add the required types that reach router expects
 */
import { RouteComponentProps } from "@reach/router";

import reducer from "./reducer";
import { Provider } from "react-redux";

import Deck from "./components/Deck";
import HandList from "./components/HandList";

// redux dev tools exist on window
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;

    // note that we can define any typed objects on `Window` here!
    socrata: {
      currentUser: any;
    };
  }
}

// use the redux devtool's composeEnhancers to keep them around
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: "Typescript Redux Store"
    })) ||
  compose;

class ReduxExampleJS extends Component<RouteComponentProps> {
  store = createStore(reducer, composeEnhancers());

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <h2>Cards in TypeScript</h2>
          <p>
            In this demo, written in TypeScript, we have a randomized deck of
            cards.
          </p>
          <p>
            Click the "Deal Hand" button to deal a new hand for up to 5 players.
          </p>
          <p>
            Click a card to "play" it and draw from the top of the deck and put
            it in the discard pile.
          </p>
          <hr />
          <div>
            <Deck />
            <HandList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default ReduxExampleJS;
