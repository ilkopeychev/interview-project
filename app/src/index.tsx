
import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './Customers';
import {Provider} from "react-redux";
import {store} from "./store"
ReactDOM.render(
<Provider store={store}><Customers /></Provider>, document.querySelector('#root'));
    