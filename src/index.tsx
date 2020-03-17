import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root/Root";
import configureStore from "./Store/Store";

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

