import React,{useState,useEffect} from 'react'
import {Button,Jumbotron,Image,Toast} from "react-bootstrap"
import axios from "axios";
import './App.css';
import algosdk from "algosdk";
import BalanceDetail from "./components/balance/balance"
import Toasttxn from "./components/toast/transactiontoast"
import Note from "./components/inputfield/note"
import AccountDisplay from "./components/accounts/accounts"
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
import SuccessModal from "./components/modal/success";
import Select from 'react-select';
function App() {
  const [algoclientinstance,setAlgoclientinstance] = useState({});
  const [account,setAccount] = useState({});
  const [generatedaccounts,setGeneratedaccounts] = useState([]);
  const [params,setParams] = useState({});
  const [paramsLoaded,setParamsLoaded] = useState(false);
  const [mnemonickey,setMnemonickey] = useState("");
  const [showMnemonic, setShowmnemonic] = useState(false);
  const [isvalidAddress,setIsvalidaddress] = useState(false);
  const [addressinput,setAddressinput] = useState("");
  const [amountinput,setAmountinput] = useState(0);
  const [showtoast, setShowtoast] = useState(false);
  const[balance,setBalance]= useState(0);
  const [note,setNote] = useState("");
  const [fee,setFee] = useState(0);
  const [txnID,setTxnID] = useState("");
  const [txnsent,setTxnsent] = useState(false);
 

  useEffect(()=>{
   
    getParams()
  },[])



  const toggletoast = () => {setShowtoast(true)};
  const closetoast = ()=> {setShowtoast(false)
  setTxnsent(false);
  };
  const txnstatus = ()=>{
    setTxnsent(false);
  }
  
  const toggleMnemonic = ()=> {
    setShowmnemonic(!showMnemonic);
  }
  const closeModal = ()=>{
  setShowmnemonic(false);
}
  const accountGenerator = ()=>{
    let generatedAccount = algosdk.generateAccount();
    setAccount(generatedAccount);
    setGeneratedaccounts([...generatedaccounts,generatedAccount]);
  }
  const mnemonicGenerator = (secretkey)=>{
 setMnemonickey(algosdk.secretKeyToMnemonic(secretkey));
 toggleMnemonic()
  }
  const selectedAccount = (obj)=>{
setAccount(obj);
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

  const getParams = async()=>{
    axios.get("https://api.testnet.algoexplorer.io/v2/transactions/params").then((res)=>{
      setParams(res.data);
      setParamsLoaded(true);
  
}).catch((err)=>{
  console.log(err)
})

  }
  const transactionbuilder = async()=>{
    const passphrase = "tomato riot sting festival atom hire outer census siege clog excuse bag electric wasp taxi wealth key pave party child craft damage group absent diamond";
    let myAccount = algosdk.mnemonicToSecretKey(passphrase);
    let address = account.addr;
    let secretkey = account.sk;
    let to= addressinput;
    let notedata = note;
    let amount= Number.parseInt(amountinput);
      let endRound = params["last-round"] + parseInt(1000);
      let txn = {
        "from": "NZID4OI6KOQX2PZ3CFFEK4VA4JFHJ5EMHJGM6UZZZCVRSLGL5Q5HEZXPJI",
        "to": to,
        "fee": params["min-fee"],
        "amount": amount,
        "firstRound":params["last-round"],
        "lastRound": endRound,
        "genesisID": params["genesis-id"],
        "genesisHash": params["genesis-hash"],
        "note": algosdk.encodeObj({notedata}),
    };
    
    let signedTxn = algosdk.signTransaction(txn, secretkey);
    let blob = signedTxn.blob;
    transactionBroadcaster(blob);
    
  }

  const transactionBroadcaster= async(blob)=>{
    axios.post("https://api.testnet.algoexplorer.io/v2/transactions",Buffer.from(blob),{
      headers:{
        'Content-Type': 'application/x-binary'
      }
    }).then((res)=>{
      setTxnID(res.data.txId)
      setTxnsent(true);
      toggletoast()
    })
  }  

  const formValidator = ()=>{
    if(paramsLoaded)  {
      if(addressinput === "" && amountinput === 0 && note === ""){
        alert("please check your input");
        return;
      }
      else{
        transactionbuilder()
      }
     }
     else {alert("please reload the page")};
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
    <div className="parent" fluid>
      
       
      {/* <Mnemonic onClick={toggleMnemonic} />  */}
      {/* <MnemonicModal flag={showMnemonic} generatedkey={mnemonickey} closeModal={closeModal}/> */}
      
{/* <Validator onClick={validator}/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} />  */}
{/* <Balance onClick={balanceGetter }/>
<AddressInput placeholder="Enter Address" onChange={addressinputhandler} /> */}
 <NavbarHeading/>
    
  <Container className="App">    
  
     
<Container className="parent-jumbotron" fluid>
 
  <div className="wallet-main " >
  <div className="generate-btn" >
<Generate onClick={accountGenerator}/>
</div>

  <Logo/>

<BalanceDetail />
<Address address={account.addr}/>

<AddressInput placeholder="To" onChange={addressinputhandler} />
<AmountInput placeholder="Amount" onChange={amountinputhandler}/>
<Note placeholder="Note" onChange={noteinputhandler} />
<SendTransaction onClick={formValidator} />
<Toasttxn showtoast= {showtoast} transactionID={txnID} closetoast={closetoast}/>




  </div>
<br/>
  <div className="accounts">
         
    
  <MnemonicModal flag={showMnemonic} generatedkey={mnemonickey} closeModal={closeModal}/>
  {generatedaccounts.map((account,index)=>{
    return(<AccountDisplay publickey={account.addr} privatekey={account.sk} key={index} mnemonic={ ()=>mnemonicGenerator(account.sk)} onClick={()=>{selectedAccount(account)}} />);
  })}
  </div>
 

</Container>

</Container>
    </div>
  );
}

export default App;
