import materializeCSS from 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDom from 'react-dom';
import {Provider }from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


//ReactDom.render(<Provider store={store}><App /></Provider>, 
//document.querySelector('#root'));

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);

//!console.log("STRIPE KEY IS ",process.env.REACT_APP_STRIPE_KEY)
//!console.log("Environment is ",process.env.NODE_ENV);

