import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Hello.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';//Tachyons is a CSS framework (similar to boostrap)

//The index.js file is where we add our components to the ReactDOM. Note that we can specify properties or 'props' inside our component, which we then have access to in the component file.
ReactDOM.render(
  <Hello greeting={'Hello' + 'React Ninja'}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
