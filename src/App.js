import React from 'react'
import classes from './App.module.css'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import News from './components/news/news'
import Music from './components/music/music'
import Settings from './components/settings/settings'
import {Route} from 'react-router-dom'
import ProfileContainer from './components/profile/profile-container'
import DialogsContainer from './components/dialogs/dialogs-container'


function App(props) {
  return (
        <div className={classes.app_wrapper}>  
          <Header /> 
          <Navbar />
          <div className={classes.app_wrapper_content}>
            <Route path="/Profile" render={() => <ProfileContainer store={props.store}/>}/>
            <Route path="/Dialogs" render={() => <DialogsContainer store={props.store}/>}/>
            <Route path="/News" render={News}/>
            <Route path="/Music" render={Music}/>
            <Route path="/Settings" render={Settings}/>
          </div>
        </div>
  );
}

export default App;
