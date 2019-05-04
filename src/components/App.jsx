import React from 'react';
import Header from './Header.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import Shows from './Shows.jsx';
import Contact from './Contact.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <MusicPlayer/>
      <Shows/>
      <Contact/>
    </div>
  );
};

export default App;