import { 
    CHANGE_SEARCHFIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';


//The 'reducer' creates the state for the store
const initialStateSearch = {
    searchfield: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCHFIELD:
            //Since we want to use pure functions, we return a new object (we don't modify the old one)
            return { ...state,  searchfield: action.payload };
        default:
            return state;
    }
}

const initialStateRobots = {
    robots: [],
    isPending: false
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state,  isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state,  robots: action.payload, isPending: false };
        case REQUEST_ROBOTS_FAILED:
            return { ...state,  error: action.payload, isPending: false };
        default:
            return state;
    }
}