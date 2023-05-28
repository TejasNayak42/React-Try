import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState('null');

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <>
    <Navbar title="Tejas" home="Home" mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>

    <div className="container">
      <Form heading="Enter the Text below"/>
    </div>

    {/* <About/> */}

    
  </>
  );
}

export default App;
