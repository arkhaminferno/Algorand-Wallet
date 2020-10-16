import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import algosdk from "algosdk";
import BalanceDetail from "./components/balance/balance";
import Toasttxn from "./components/toast/transactiontoast";
import Note from "./components/inputfield/note";
import AccountDisplay from "./components/accounts/accounts";
import Address from "./components/address/address";
import { Container } from "react-bootstrap";
import Generate from "./components/buttons/generate";
import NavbarHeading from "./components/navbar/navbar";
import SendTransaction from "./components/buttons/sendTransaction";
import AddressInput from "./components/inputfield/address";
import AmountInput from "./components/inputfield/amount";
import MnemonicModal from "./components/modal/mnemonic";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";
var fs = require("fs");
/**
 * This component is the parent component responsible for 
 - Ability to create a wallet.
 -  Display balance
 - Send a transaction
 * @state account: object -> loads the currently selected account details 
 * @state generatedaccounts: array -> Stores the account details of generated accounts by the user. 
 * @state params: object -> stores the predicted parameters for bulding transaction object
 * @state paramsLoaded: boolean -> true when all the parameters are loaded into the state of this component.
 * @state mnemonickey: string -> stores the mnemonic key of  the selected account by the user. 
 * @state showMnemonic: boolean -> flag boolean value for displaying mnemonic of the selected account of user
 * @state addressinput: string -> stores the address of the receiver account.
 * @state amountinput: integer -> stores the amount 
 * @state showtoast: boolean -> flag for displaying toast notification.
 * @state balance: integer -> stores the balance of the currently selected account.
 * @state note : string -> stores the string given by a user for sending transaction.
 * @state txnID: string -> stores transaction ID of the successfull transaction
 * @state txnsent:boolean -> flag for indicating whether the transaction is successfull or not.
 * @state seconds:intger -> for refetching balance component every 3 seconds
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */

function App() {
  const [account, setAccount] = useState({});
  const [generatedaccounts, setGeneratedaccounts] = useState([]);
  const [params, setParams] = useState({});
  const [paramsLoaded, setParamsLoaded] = useState(false);
  const [mnemonickey, setMnemonickey] = useState("");
  const [showMnemonic, setShowmnemonic] = useState(false);
  const [addressinput, setAddressinput] = useState("");
  const [amountinput, setAmountinput] = useState(0);
  const [showtoast, setShowtoast] = useState(false);
  const [balance, setBalance] = useState(0);
  const [note, setNote] = useState("");
  const [txnID, setTxnID] = useState("");
  const [txnsent, setTxnsent] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [addr, setAddr] = useState("");

  useEffect(() => {
    getParams();
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
      balanceGetter(account.addr); // yaha se mai state me stored address le rha hu
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Function for getting parameters from the algorand blockchain
  const getParams = async () => {
    axios
      .get("https://api.testnet.algoexplorer.io/v2/transactions/params")
      .then((res) => {
        setParams(res.data);
        setParamsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Function for generating wallets
  const accountGenerator = () => {
    let generatedAccount = algosdk.generateAccount();
    setAccount(generatedAccount);
    balanceGetter(generatedAccount.addr);
    setGeneratedaccounts([...generatedaccounts, generatedAccount]);
  };

  // Function for generating seed phrase from secret key
  const mnemonicGenerator = (secretkey) => {
    setMnemonickey(algosdk.secretKeyToMnemonic(secretkey));
    toggleMnemonic();
  };

  // Function  for getting balance of an address
  const balanceGetter = (address) => {
    if (address) {
      axios
        .get(`https://api.testnet.algoexplorer.io/v2/accounts/${address}`)
        .then((res) => {
          setBalance(res.data.amount);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  // Function for creating,signing transaction object
  const transactionbuilder = async () => {
    const passphrase =
      "tomato riot sting festival atom hire outer census siege clog excuse bag electric wasp taxi wealth key pave party child craft damage group absent diamond";
    let myAccount = algosdk.mnemonicToSecretKey(passphrase);
    let address = account.addr;
    let secretkey = account.sk;
    let to = addressinput;
    let notedata = note;
    let amount = Number.parseInt(amountinput);
    let endRound = params["last-round"] + parseInt(1000);
    let txn = {
      from: address,
      to: to,
      fee: params["min-fee"],
      amount: amount,
      firstRound: params["last-round"],
      lastRound: endRound,
      genesisID: params["genesis-id"],
      genesisHash: params["genesis-hash"],
      note: algosdk.encodeObj({ notedata }),
    };

    let signedTxn = algosdk.signTransaction(txn, secretkey);
    let blob = signedTxn.blob;
    transactionBroadcaster(blob);
  };

  // Function for sending the transaction into the Algorand blockchain
  const transactionBroadcaster = async (blob) => {
    axios
      .post(
        "https://api.testnet.algoexplorer.io/v2/transactions",
        Buffer.from(blob),
        {
          headers: {
            "Content-Type": "application/x-binary",
          },
        }
      )
      .then((res) => {
        setTxnID(res.data.txId);
        setTxnsent(true);
        toggletoast();
      });
  };

  // Function for selecting account from list of generated accounts
  const selectedAccount = (obj) => {
    setAccount(obj);
    balanceGetter(obj.addr);
  };

  // Exporting seed phrase

  const downloadTxtFile = (mnemonic) => {
    const element = document.createElement("a");
    const file = new Blob([mnemonic], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "seedPhrase.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  // set flag values to display a component
  const toggletoast = () => {
    setShowtoast(true);
  };
  const closetoast = () => {
    setShowtoast(false);
    setTxnsent(false);
  };

  const txnstatus = () => {
    setTxnsent(false);
  };

  const toggleMnemonic = () => {
    setShowmnemonic(!showMnemonic);
  };
  const closeModal = () => {
    setShowmnemonic(false);
  };

  // form validator function

  const formValidator = () => {
    if (paramsLoaded) {
      transactionbuilder();
    } else {
      alert("please check input or reload the page");
    }
  };

  // input handlers
  const addressinputhandler = (e) => {
    e.preventDefault();
    setAddressinput(e.target.value);
  };

  const amountinputhandler = (e) => {
    e.preventDefault();
    setAmountinput(e.target.value);
  };

  const noteinputhandler = (e) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  return (
    <div className="parent" fluid>
      <NavbarHeading />
      <Container className="App">
        <Toasttxn
          showtoast={showtoast}
          transactionID={txnID}
          closetoast={closetoast}
        />
        <Container className="parent-jumbotron" fluid>
          <div className="wallet-main ">
            <div>
              <Logo />
            </div>
            <div>
              <BalanceDetail balance={balance} />
            </div>

            <div>
              <Address address={account.addr} />
            </div>
            <div>
              <AddressInput placeholder="To" onChange={addressinputhandler} />
            </div>
            <div>
              <AmountInput placeholder="Amount" onChange={amountinputhandler} />
            </div>
            <div>
              <Note placeholder="Note" onChange={noteinputhandler} />
            </div>
            <div>
              <SendTransaction onClick={formValidator} />
            </div>
          </div>
          <br></br>
          <div className="generate-btn">
            <Generate onClick={accountGenerator} />
          </div>
          <div className="accounts">
            <MnemonicModal
              flag={showMnemonic}
              generatedkey={mnemonickey}
              closeModal={closeModal}
            />
            {generatedaccounts.map((account, index) => {
              return (
                <AccountDisplay
                  publickey={account.addr}
                  privatekey={account.sk}
                  key={index}
                  exportsk={() => {
                    let mnemonic = algosdk.secretKeyToMnemonic(account.sk)
                    downloadTxtFile(mnemonic);
                  }}
                  mnemonic={() => mnemonicGenerator(account.sk)}
                  onClick={() => {
                    selectedAccount(account);
                  }}
                />
              );
            })}
          </div>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
