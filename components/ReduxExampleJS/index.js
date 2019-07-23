import React, { Component } from "react";
import { createStore, compose } from "redux";

import reducer from "./reducer";
import { Provider } from "react-redux";

import Deck from "./components/Deck";
import HandList from "./components/HandList";

// use the redux devtool's composeEnhancers to keep them around
const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: "Javascript Redux Store"
    })) ||
  compose;

class ReduxExampleJS extends Component {
  store = createStore(reducer, composeEnhancers());

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <h2>Cards in JavaScript</h2>
          <p>
            In this demo, written in JavaScript, we have a randomized deck of
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
