import React,{useState,useEffect} from 'react'
import {Button,Jumbotron,Image} from "react-bootstrap"
import axios from "axios";
import './App.css';
import algosdk from "algosdk";
import BalanceDetail from "./components/balance/balance"
import Note from "./components/inputfield/note"
import Address from "./components/address/address"
import {Alert, Container} from "react-bootstrap";
import Generate from "./components/buttons/generate"
import NavbarHeading from "./components/navbar/navbar"
import Mnemonic from "./components/buttons/mnemonic"
import SendTransaction from "./components/buttons/sendTransaction"
import AddressInput from './components/inputfield/address';
import AmountInput from "./components/inputfield/amount";
import MnemonicModal from "./components/modal/mnemonic"; 
import Validator from "./components/buttons/validity"
import Balance from "./components/buttons/balance"
import {algodClient,postHeader} from "./service/algodclient"
import Logo from "./components/logo/logo";
function App() {
  const [algoclientinstance,setAlgoclientinstance] = useState({});
  const [account,setAccount] = useState({});
  const [mnemonickey,setMnemonickey] = useState("");
  const [showMnemonic, setShowmnemonic] = useState(false);
  const [isvalidAddress,setIsvalidaddress] = useState(false);
  const [addressinput,setAddressinput] = useState("");
  const [amountinput,setAmountinput] = useState(0);
  const[balance,setBalance]= useState(0);
  const [note,setNote] = useState("");

  useEffect(()=>{
    

    
  },[])



  const transactionBroadcaster= async(blob)=>{
    axios.post("https://api.testnet.algoexplorer.io/v2/transactions",Buffer.from(blob),{
      headers:{
        'Content-Type': 'application/x-binary'
      }
    }).then((res)=>{
      console.log(res);
    })
  }  
 
  const toggleMnemonic = ()=> {
    setShowmnemonic(!showMnemonic);
    mnemonicGenerator()
  }
  const closeModal = ()=>{
  setShowmnemonic(false);
}
  const accountGenerator = ()=>{
    let generatedAccount = algosdk.generateAccount();
    console.log(generatedAccount); 
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
        "fee": res.data["min-fee"],
        "amount": amountinput,
        "firstRound":res.data["last-round"],
        "lastRound": endRound,
        "genesisID": res.data.["genesis-id"],
        "genesisHash": res.data.["genesis-hash"],
        "note": algosdk.encodeObj({note}),
    };
    
    let signedTxn = algosdk.signTransaction(txn, secretkey);
    let blob = signedTxn.blob;
    transactionBroadcaster(blob);
  
}).catch((err)=>{
  console.log(err)
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
  
      const noteinputhandler = (e)=>{
        e.preventDefault();
        setNote(e.target.value);
          }
  return (
    <Container className="parent" fluid>
      {/* <Generate onClick={accountGenerator}/>
      Address : {account.addr}
      Secret Key: {account.sk}
      <Mnemonic onClick={toggleMnemonic} /> */}
      {/* <MnemonicModal flag={showMnemonic} generatedkey={mnemonickey} closeModal={closeModal}/> */}
      
{/* <Validator onClick={validator}/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} />  */}
{/* <Balance onClick={balanceGetter }/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} /> */}
 <NavbarHeading/>
    
  <Container className="App">    
       
     
<Jumbotron className="parent-jumbotron" fluid>
  
<Logo/>

<Address />
<BalanceDetail/>
<AddressInput placeholder="To" onChange={addressinputhandler} />
<AmountInput placeholder="Amount" onChange={amountinputhandler}/>
<Note placeholder="Note" onChange={noteinputhandler} />
<SendTransaction onClick={transactionbuilder}/>
</Jumbotron>
</Container>
    </Container>
  );
}

export default App;
