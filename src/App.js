import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://png.pngtree.com/templates_detail/20180830/company-logo-template-png_30498.jpg' alt="logo"/>
      </header>
      <nav className='nav'>
        <ul>
          <li>Profile</li>
          <li>messages</li>
          <li>news</li>
          <li>music</li>
          <li>settings</li>
        </ul>
      </nav>
      <body className='content'>
        <div>
          <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701379595.jpg' alt="peyzah"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
