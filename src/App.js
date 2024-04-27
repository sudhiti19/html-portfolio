// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/main';
import Skills from './components/skills';
import Contact from './components/contact';
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
