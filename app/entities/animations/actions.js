import { ANIMATION_UPDATE } from './types';

const animationUpdate = ({ prop, value }) => ({
    type: ANIMATION_UPDATE,
    payload: { prop, value }
});

export { animationUpdate };
