import './App.css';
import React from 'react';
import NavBar from './Components/UI/NavBar/NavBar';
import Path from './Components/Path/path';
import UI from './Components/UI/UI';
import Promo from './Components/UI/Promo/Promo';



function App() {
  return (
<React.Fragment>
  <div className="App">
    <NavBar/>
    <Promo/>
    <Path/>
   </div>
</React.Fragment>
    
  );
}

export default App;
