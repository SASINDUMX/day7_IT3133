import './App.css';
import Childcom from './components/Childcom';
import {useState} from 'react';

function App() {
  const [childname,setChildname]=useState("Default");
  const reciveName=(name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React Im parent</h2>
      <Childcom setfun={reciveName}/>
      <p>Parent: My child said: {childname}</p>
    </div>
  );
}

export default App;
