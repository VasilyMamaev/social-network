import React from 'react'
import classes from './App.module.css'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Dialogs from './components/dialogs/dialogs'
import News from './components/news/news'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import {Route, BrowserRouter} from 'react-router-dom'

function App(props) {


  return (
    <BrowserRouter>
      <div className={classes.app_wrapper}>  
        <Header /> 
        <Navbar />
        <div className={classes.app_wrapper_content}>
          <Route path="/Profile" render={() => <Profile state={props.state.profile} />}/>
          <Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogs} />}/>
          <Route path="/News" render={News}/>
          <Route path="/Music" render={Music}/>
          <Route path="/Settings" render={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
