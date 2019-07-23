import PropTypes from "prop-types";

import { Suits, Ranks } from "./constants";

/** Prop type for any suit */
export const SuitPropType = PropTypes.oneOf(Suits);

/** Prop type for any rank */
export const RankPropType = PropTypes.oneOf(Ranks);

/** Prop type for a card */
export const CardPropType = PropTypes.shape({
  suit: SuitPropType.isRequired,
  rank: RankPropType.isRequired
});

/** Prop type for a hand */
export const HandPropType = PropTypes.arrayOf(CardPropType);
