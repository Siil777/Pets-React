import './App.css';
import Header from './components/header/Header.js';
import ComponentOne from './components/sectionone/sectionone.js';
import ComponentTwo from './components/sectiontwo/sectiontwo.js';
import practice from './components/practice.js';
import bg from './assets/startScreen.jpg';
import { useEffect } from 'react';

const App =()=> {
  useEffect(()=>{
    document.getElementById('bg').style.backgroundImage = `url(${bg})`;
  });
  return (
    <div>
          <div id='bg' style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <Header /> {}
          <ComponentOne /> {}
          </div>
          <ComponentTwo /> {}
      </div>
  );
}
export default App;
