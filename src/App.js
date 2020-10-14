import React,{useState,useEffect} from 'react'
import {Button} from "react-bootstrap"
import axios from "axios";
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
import {transactionBroadcaster} from "./service/algodclient";
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
    //  setAlgoclientinstance(instantiateAlgodClient());
  },[])

 

  const toggleMnemonic = ()=> {
    setShowmnemonic(!showMnemonic);
    mnemonicGenerator()
  }
  const closeModal = ()=>{
  setShowmnemonic(false);
}
  const accountGenerator = ()=>{
    let generatedAccount = algosdk.generateAccount(); 
    setAccount(generatedAccount);
  }
  const mnemonicGenerator = ()=>{
 setMnemonickey(algosdk.secretKeyToMnemonic(account.sk));
  }

  const balanceGetter = ()=>{
    axios.get(`https://api.testnet.algoexplorer.io/v2/accounts/${addressinput}`).then((res)=>{
      setBalance(res.data.amount);
    })
    }
  
 const validator = ()=>{
    setIsvalidaddress(algosdk.isValidAddress(addressinput));
    isvalidAddress ? alert("Address is valid") : alert("Address is not valid!")
  }

  const transactionbuilder = ()=>{
    let address = account.addr;
    let secretkey = account.sk;
    let to= addressinput;
    let amount= amountinput;
    
    axios.get("https://api.testnet.algoexplorer.io/v2/transactions/params").then((res)=>{
      let endRound = res.data["last-round"] + parseInt(1000);
      let txn = {
        "from": account.addr,
        "to": to,
        "fee": res.data.fee,
        "amount": Number.parseInt(amount),
        "firstRound":res.data["last-round"],
        "lastRound": endRound,
        "genesisID": res.data.["genesis-id"],
        "genesisHash": res.data.["genesis-hash"],
        "note": algosdk.encodeObj(`Transaction sent by ${address}`),
    };
    
    const signedTxn = algosdk.signTransaction(txn, secretkey);
    transactionBroadcaster(signedTxn);
  
})
    
  }

 

  const addressinputhandler = (e)=>{
e.preventDefault();
setAddressinput(e.target.value);
  }

  const amountinputhandler = (e)=>{
    e.preventDefault();
    setAmountinput(e.target.value);
      }
  
  return (
    <Container className="App">
      <Generate onClick={accountGenerator}/>
      Address : {account.addr}
      Secret Key: {account.sk}
      <Mnemonic onClick={toggleMnemonic} />
      <MnemonicModal flag={showMnemonic} generatedkey={mnemonickey} closeModal={closeModal}/>
       <a href="https://bank.testnet.algorand.network/" rel="noopener noreferrer" target="_blank">Get Some Balance </a>
{/* <Validator onClick={validator}/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} />  */}
<Balance onClick={balanceGetter }/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} />
     
<h1>Balance is {balance}</h1>
       <SendTransaction onClick={transactionbuilder}/>
      
      <AddressInput placeholder="To" onChange={addressinputhandler} />
      <AmountInput placeholder="Amount" onChange={amountinputhandler}/>
    
    
    </Container>
  );
}

export default App;
