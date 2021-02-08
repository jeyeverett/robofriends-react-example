import { 
    CHANGE_SEARCHFIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchfield = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
});

//The below function combined with its counter part (onRequestRobots: () => dispatch(requestRobots())) in App.js relies on the redux-thunk middleware
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())  
            .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
            .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}