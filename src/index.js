import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import state from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { subscribe } from './redux/state'

const renderEntireTree = (state) => { 
  ReactDOM.render( 
    <BrowserRouter>
      <App state={state}/>
    </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(state)

subscribe(renderEntireTree)

