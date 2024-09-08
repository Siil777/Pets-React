import './App.css';
import Header from './components/Header.js';
import ComponentOne from './components/ComponentOne.js';
import ComponentTwo from './components/ComponentTwo.js';

const App =()=> {
  return (
    <div>
        <div className='wrapper pt-5 px-5'>
          <Header /> {}
          <ComponentOne /> {}
          <ComponentTwo /> {}
      </div>
    </div>
  );
}
export default App;
