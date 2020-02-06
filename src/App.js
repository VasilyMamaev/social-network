import React from 'react'
import classes from './App.module.css'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Dialogs from './components/dialogs/dialogs'
import News from './components/news/news'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import {Route} from 'react-router-dom'
import state from './redux/state'

function App(props) {
  return (
        <div className={classes.app_wrapper}>  
          <Header /> 
          <Navbar />
          <div className={classes.app_wrapper_content}>
            <Route path="/Profile" render={() => <Profile state={props.state.profile} addPost={props.state.addPost}/>}/>
            <Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogs} addMessage={props.state.addMessage} />}/>
            <Route path="/News" render={News}/>
            <Route path="/Music" render={Music}/>
            <Route path="/Settings" render={Settings}/>
          </div>
        </div>
  );
}

export default App;
