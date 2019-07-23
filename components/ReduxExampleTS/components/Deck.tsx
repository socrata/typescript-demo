import React, { Component } from "react";
import { connect, Dispatch } from "react-redux";

import {
  reshuffleDiscardPile,
  ReshuffleDiscardAction,
  ActionTypes
} from "../actions";
import {
  getNumberOfCardsInDeck,
  getNumberOfCardsInDiscardPile
} from "../selectors";
import { State } from "../types";

/** Props from mapStateToProps */
interface StateProps {
  /** Total number of cards left in the deck */
  numberOfCardsInDeck: number;

  /** Total number of cards in the discard pile */
  numberOfCardsInDiscardPile: number;
}

/** Props from mapDispatchToProps */
interface DispatchProps {
  /** Function to call to reshuffle the discard pile back into the deck */
  onReshuffleDiscardPile: () => ReshuffleDiscardAction;
}

type Props = StateProps & DispatchProps;

/** Renders info about the deck and discard pile */
class Deck extends Component<Props> {
  render() {
    const {
      numberOfCardsInDeck,
      numberOfCardsInDiscardPile,
      onReshuffleDiscardPile
    } = this.props;
    return (
      <div>
        <div>Number of cards left in deck: {numberOfCardsInDeck}</div>
        <div>
          Number of cards in discard pile: {numberOfCardsInDiscardPile}{" "}
          <button onClick={() => onReshuffleDiscardPile()}>Reshuffle</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  numberOfCardsInDeck: getNumberOfCardsInDeck(state),
  numberOfCardsInDiscardPile: getNumberOfCardsInDiscardPile(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypes>
): DispatchProps => ({
  onReshuffleDiscardPile: () => dispatch(reshuffleDiscardPile())
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
