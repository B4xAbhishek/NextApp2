import merge from 'lodash/merge';
import { Schemas } from '../store/schema';

const initialState = {
    user: Schemas.USER,
    home: Schemas.HOME,
    category: Schemas.CATEGORY,
    ad: Schemas.AD,
    messages: Schemas.MESSAGE,
    profile: Schemas.PROFILE,
};

const entities = (state = initialState, action) => {
    if (action.entities) {
        return merge({}, state, action.entities);
    }
    return state;
}

export default entities;