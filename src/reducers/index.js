import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import principles from './principles-reducer';

export default combineReducers({
  routing,
  principles,
});
