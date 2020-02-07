import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderEntireTree = (state) => { 
  ReactDOM.render( 
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(store.getState())

store.subscriber(renderEntireTree)
