import { combineReducers } from 'redux';
import projects from './projects';
import isLoading from './isLoading';

const createRootReducer = () => combineReducers({
  projects,
  isLoading,
});

export default createRootReducer;
