import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title="Tejas" home="Home" mode={mode} toggleMode={toggleMode}/>

    <div class="alert alert-warning d-flex justify-content-between align-items-center" role="alert" >
      <div> 
          Alert !!! your device has been taken down by a<a href="/" className="alert-link"> Deadly virus</a>.
      </div>
      <button type="button" className="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div className="container">
      <Form heading="Enter the Text below"/>
    </div>

    {/* <About/> */}

    
  </>
  );
}

export default App;
