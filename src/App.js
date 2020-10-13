import React,{useState,useEffect} from 'react'
import {Button} from "react-bootstrap"
import './App.css';
import algosdk from "algosdk";
import {Alert, Container} from "react-bootstrap";
import Generate from "./components/buttons/generate"
import Mnemonic from "./components/buttons/mnemonic"
import SendTransaction from "./components/buttons/sendTransaction"
import AddressInput from './components/inputfield/address';
import AmountInput from "./components/inputfield/amount";
import MnemonicModal from "./components/modal/mnemonic"; 
import Validator from "./components/buttons/validity"
import {ClientSetup} from "./service/algodclient";
import Balance from "./components/buttons/balance"
function App() {
  const [algoclientinstance,setAlgoclientinstance] = useState({});
  const [account,setAccount] = useState({});
  const [mnemonickey,setMnemonickey] = useState("");
  const [showMnemonic, setShowmnemonic] = useState(false);
  const [isvalidAddress,setIsvalidaddress] = useState(false);
  const [addressinput,setAddressinput] = useState("");
  const [amountinput,setAmountinput] = useState(0);
  const[balance,setBalance]= useState(0);

  useEffect(()=>{
    setAlgoclientinstance(ClientSetup());
 
    
  },[])

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

  const balanceGetter = ()=>{
    console.log(algoclientinstance.accountInformation(account.addr));
  }
  const validator = ()=>{
    setIsvalidaddress(algosdk.isValidAddress(account.addr));
    isvalidAddress ? alert("Address is valid") : alert("Address is not valid!")
  }

  const addressinputhandler = (e)=>{
e.preventDefault();
setAddressinput(...addressinput,e.target.value);
  }

  const amountinputhandler = (e)=>{
    e.preventDefault();
    setAmountinput(...amountinput,e.target.value);
      }
  
  return (
    <Container className="App">
      <Generate onClick={accountGenerator}/>
      Address : {account.addr}
      Secret Key: {account.sk}
      Balance:{balance}
      <Mnemonic onClick={toggleMnemonic} />
      <MnemonicModal flag={showMnemonic} generatedkey={mnemonickey} closeModal={closeModal}/>
       <a href="https://bank.testnet.algorand.network/" rel="noopener noreferrer" target="_blank">Get Some Balance </a>
<Validator onClick={validator}/>

<Balance onClick={balanceGetter }/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} />
      {/* <SendTransaction />
      
      <AddressInput placeholder="To" onChange={addressinputhandler} />
      <AmountInput placeholder="Amount" onChange={amountinputhandler}/> */}
    </Container>
  );
}

export default App;
