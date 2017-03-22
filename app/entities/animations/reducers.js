import { ANIMATION_UPDATE } from './types';

const INITIAL_STATE = {
    duration: '5000',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ANIMATION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
