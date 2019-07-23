import React, { Component } from "react";
import { connect, Dispatch } from "react-redux";

import { getHands } from "../selectors";
import { dealHand, DealHandAction, ActionTypes } from "../actions";
import Hand from "./Hand";
import { Card, State } from "../types";

/** Props from mapStateToProps */
interface StateProps {
  /** List of every hand */
  hands: Card[][];
}

/** Props from mapDispatchToProps */
interface DispatchProps {
  /** Function to call to deal a new hand */
  onDealHand: () => DealHandAction;
}

type Props = StateProps & DispatchProps;

/** Renders a list of all the hands */
class HandList extends Component<Props> {
  render() {
    const { hands, onDealHand } = this.props;

    return (
      <div>
        {hands.map((hand, index) => {
          return <Hand key={`hand-${index}`} index={index} />;
        })}
        <button disabled={hands.length >= 5} onClick={() => onDealHand()}>
          Deal Hand
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  hands: getHands(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypes>
): DispatchProps => ({
  onDealHand: () => dispatch(dealHand())
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(HandList);
