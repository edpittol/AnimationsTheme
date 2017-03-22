/* REDUCERS */
import { combineReducers } from 'redux';
import animations from './animations/reducers';

export default combineReducers({
    animations
});

/* ACTIONS */
export * from './animations/actions';
