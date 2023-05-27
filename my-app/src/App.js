import './App.css';
import Navbar from './components/Navbar';
// import Form from './components/Form';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="Tejas" home="Home"/>
    {/* <div className="container">
      <Form heading="Enter the Text below"/>
    </div> */}
    <About/>

    
  </>
  );
}

export default App;
