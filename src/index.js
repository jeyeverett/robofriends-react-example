import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'; //Allows us to make async fetch calls in redux
import { createLogger } from 'redux-logger'; //Logs state changes to the console
import reportWebVitals from './reportWebVitals';
import 'tachyons';//Tachyons is a CSS framework (similar to boostrap)
import App from './containers/App';
import './index.css';
import './containers/App.css';
import { searchRobots, requestRobots } from './reducers';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

//The index.js file is where we add our components to the ReactDOM. Note that we can specify properties or 'props' inside our component, which we then have access to in the component file.
//Note we create the property robots and assign our robots array to it
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();