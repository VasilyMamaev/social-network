import React from 'react'
import classes from './App.module.css'
import Navbar from './components/navbar/navbar'
import News from './components/news/news'
import Music from './components/music/music'
//import Settings from './components/settings/settings'
import {Route} from 'react-router-dom'
import ProfileContainer from './components/profile/profile-container'
import DialogsContainer from './components/dialogs/dialogs-container'
import UsersContainer from './components/users/users-container'
import HeaderContainer from './components/header/header-container'


function App(props) {
  return (
        <div className={classes.app_wrapper}>  
          <HeaderContainer /> 
          <Navbar />
          <div className={classes.app_wrapper_content}>
            <Route path="/Profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/Dialogs" render={() => <DialogsContainer />}/>
            <Route path="/News" render={News}/>
            <Route path="/Music" render={Music}/>
            <Route path="/Users" render={() => <UsersContainer />}/>
          </div>
        </div>
  );
}

export default App;
