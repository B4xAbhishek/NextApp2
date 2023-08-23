import { combineReducers } from 'redux';

import entities from './entities';
import authReducer from './auth-reducer';
import homeReducer from './home-reducer';

const rootReducer = combineReducers({
  entities,
  authReducer,
  homeReducer
  // moderationReducer,
  // subadminReducer
});

export default rootReducer;
