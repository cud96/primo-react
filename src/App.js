import './App.css';
import react from 'react';
import NavBar from './components/NavBar';
import Clocks from './components/Clock';
import Card from './card';

function App() {
  return (
  <div>
    <div>
    <NavBar/>
    </div>
    <Clocks/>
    <div className='grid grid-cols-4 gap-10'>
      <Card />
    </div>
    
    </div>
  );
}

export default App;
