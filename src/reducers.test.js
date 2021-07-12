import { 
    CHANGE_SEARCHFIELD, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS, 
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchfield: ''
    };
    
    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchfield: ''}); //We pass undefined in for state so that state uses the initialState
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, 
            { 
                type: CHANGE_SEARCHFIELD,
                payload: 'abc'

            }))
            .toEqual({ searchfield: 'abc'}); //We pass undefined in for state so that state uses the initialState
    });
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots); //We pass undefined in for state so that state uses the initialState
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        expect(reducers.requestRobots(initialStateRobots, { 
            type: REQUEST_ROBOTS_PENDING
        }))
        .toEqual({ ...initialStateRobots, isPending: true });
    });

    it('should handle REQUEST_ROBOTS_PENDING action', () => {
        const data = [{
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
        }];

        expect(reducers.requestRobots(initialStateRobots, { 
            type: REQUEST_ROBOTS_SUCCESS,
            payload: data
        }))
        .toEqual({ ...initialStateRobots, robots: data, isPending: false });
    });

    it('should handle REQUEST_ROBOTS_FAILED action', () => {

        expect(reducers.requestRobots(initialStateRobots, { 
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error'
        }))
        .toEqual({ ...initialStateRobots, error: 'error', isPending: false });
    });
});