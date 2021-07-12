import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import robotData from './robotData';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchfield', () => {
  const text = 'test';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };

  it('should handle a change to the input', () => {
    expect(actions.setSearchfield(text)).toEqual(expectedAction);
  });
});

describe('requestRobots', () => {
  //Note that because we use the redux-thunk Middleware in actions to pass dispatch, we need to use an npm package called redux-mock-store to write this test properly (see configuration above)
  it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action[0]).toEqual(expectedAction);
  });

  function fetchData(url) {
    return (dispatch) => {
      return fetch(url)
        .then((data) => data.json())
        .then((data) =>
          dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
        )
        .catch((error) =>
          dispatch({ type: REQUEST_ROBOTS_FAILED, payload: 'error' })
        );
    };
  }

  it('handles requesting robots API success', () => {
    const store = mockStore();

    const expectedActionSuccess = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: robotData,
    };

    return store
      .dispatch(fetchData('https://jsonplaceholder.typicode.com/users'))
      .then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual(expectedActionSuccess);
      });
  });

  jest.setTimeout(30000);

  it('handles requesting robots API failed', () => {
    const store = mockStore();

    const expectedActionFailed = {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'error',
    };

    return store
      .dispatch(fetchData('https://jsonplaceERROR.typicode.com/users'))
      .then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual(expectedActionFailed);
      });
  });
});
