import PropTypes from "prop-types";

import { Suits, Ranks } from "./util";

export const SuitPropType = PropTypes.oneOf(Suits);
export const RankPropType = PropTypes.oneOf(Ranks);

export const CardPropType = PropTypes.shape({
  suit: SuitPropType.isRequired,
  rank: RankPropType.isRequired
});

export const HandPropType = PropTypes.arrayOf(CardPropType);
