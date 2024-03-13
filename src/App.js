import logo from './logo.svg';
import './App.css';

import Card from './component/card';
import Navbar from './component/Navbar';
function App() {
  return(
    <>
    <Navbar/>

    <div style={{
        height:'30%',
        width:'30%'
        
    }}>
      <Card/>

    </div>
                </>
  )
}

export default App;
