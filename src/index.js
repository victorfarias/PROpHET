import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider  } from 'react-redux'
import { addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import pt from 'react-intl/locale-data/pt';
import rootReducer from './reducers/rootReducer'

addLocaleData(en);
addLocaleData(pt);
addLocaleData(es);

const store = createStore(rootReducer)

if(localStorage.lang){
    store.dispatch({type:'CHANGE_LOCALE', lang: localStorage.lang});
}

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
