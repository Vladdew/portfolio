
export const ACTION_TYPES = {
  START_LOADING: 'START_LOADING',
  RECEIVE_PROJECTS: 'RECEIVE_PROJECTS',
  FINISH_LOADING: 'FINISH_LOADING',
};

const {
  START_LOADING,
  RECEIVE_PROJECTS,
  FINISH_LOADING,
} = ACTION_TYPES;

export const startLoading = () => ({ type: START_LOADING });
export const recieveProjects = (projects) => ({ type: RECEIVE_PROJECTS, projects });
export const finishLoading = () => ({ type: FINISH_LOADING });
