import React,{useState,useEffect} from 'react'
import './App.css';
import algosdk from "algosdk";
import {Alert, Container} from "react-bootstrap";
import Generate from "./components/buttons/generate"
import Mnemonic from "./components/buttons/mnemonic"
import SendTransaction from "./components/buttons/sendTransaction"
import Input from './components/inputfield/input';
import MnemonicModal from "./components/modal/mnemonic"; 
import {ClientSetup} from "./service/algodclient";

function App() {
  const [account,setAccount] = useState({});
  const [mnemonickey,setMnemonickey] = useState("");
  const [showMnemonic, setShowmnemonic] = useState(false);

  const toggleMnemonic = ()=> {
    setShowmnemonic(!showMnemonic);
    mnemonicGenerator()
  }
  const closeModal = ()=>{
  setShowmnemonic(false);
}
  const accountGenerator = ()=>{
    setAccount(algosdk.generateAccount());
  }
  const mnemonicGenerator = ()=>{
 setMnemonickey(algosdk.secretKeyToMnemonic(account.sk));
  }
  
  return (
    <Container className="App">
      <Generate onClick={accountGenerator}/>
      Address : {account.addr}
      Secret Key: {account.sk}
      Mnemonic : {mnemonickey}
      <Mnemonic onClick={toggleMnemonic} />
      <MnemonicModal flag={showMnemonic} generatedkey={mnemonickey} closeModal={closeModal}/>
      <SendTransaction />
      
      <Input placeholder="To"/>
      <Input placeholder="Amount"/>
    </Container>
  );
}

export default App;
