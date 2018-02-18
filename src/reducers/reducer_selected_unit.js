import { GET_SELECTED_UNIT } from '../actions/index';

export default function(state = 'kelvin', action) {
    switch (action.type) {
        case GET_SELECTED_UNIT:
            if (!action.payload) {
                console.log(action.payload);
                return state;
            }
            return action.payload;
    }

    return state;
}
