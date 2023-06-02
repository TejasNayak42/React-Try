import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState('null');

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode has been enabled','success')
      document.title='TeXtO -Dark'

      // This is to Change the info of title for needed amount of time.
      // This starts working when dark mode is set on.
      // setInterval(()=>{
      //   document.title='TeXtO is best'
      // },2000)
      // setInterval(()=>{
      //   document.title='Tejas is great'
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
      document.title='TeXtO -Light'
    }
  }
  return (
    <>
     <BrowserRouter>
      <Navbar title="TeXtO" home="Home" mode={mode} toggleMode={toggleMode}/>  
      
      {alert && <Alert alert={alert}/>}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route 
        path="/" 
        element={
          <div className="container">
              <Form showAlert={showAlert} heading="Enter the Text below"/>
          </div>} />
       
      </Routes>
    </BrowserRouter>    
  </>
  );
}

export default App;
