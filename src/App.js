import React,{useState,useEffect} from 'react'
import './App.css';
import algosdk from "algosdk";
import {Container} from "react-bootstrap";
import Generate from "./components/buttons/generate"
import Mnemonic from "./components/buttons/mnemonic"
import SendTransaction from "./components/buttons/sendTransaction"
import Input from './components/inputfield/input';
import {ClientSetup} from "./service/algodclient";

function App() {
  const [account,setAccount] = useState({});
 
  useEffect(()=>{
  ClientSetup()
  })
  
  return (
    <Container className="App">
      <Generate />
      <Mnemonic />
      <SendTransaction />
      
      <Input placeholder="To"/>
      <Input placeholder="Amount"/>
    </Container>
  );
}

export default App;
