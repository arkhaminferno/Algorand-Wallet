import React from 'react'
import './App.css';
import Generate from "./components/buttons/generate"
import Mnemonic from "./components/buttons/mnemonic"
import SendTransaction from "./components/buttons/sendTransaction"
import Input from './components/inputfield/input';

function App() {
  return (
    <div className="App">
      <Generate />
      <Mnemonic />
      <SendTransaction />
      
      <Input placeholder="To"/>
      <Input placeholder="Amount"/>
    </div>
  );
}

export default App;
