import { ACTION_TYPES } from '../store/actions';

const { RECEIVE_PROJECTS } = ACTION_TYPES;

export default (state = {}, { type, projects }) => {
  switch (type) {
    case RECEIVE_PROJECTS:
      return projects;
    default:
      return state;
  }
};
