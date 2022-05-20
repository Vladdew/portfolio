import { ACTION_TYPES } from '../store/actions';

const { START_LOADING, FINISH_LOADING } = ACTION_TYPES;

export default (state = null, { type }) => {
  switch (type) {
    case START_LOADING:
      return true;

    case FINISH_LOADING:
      return false;

    default:
      return state;
  }
};
