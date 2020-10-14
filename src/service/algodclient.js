import algosdk from "algosdk";

const algodToken = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const algodServer = "https://algoexplorer.io/api-dev/v2";
const algodPort = 4001;

let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);


const waitForConfirmation = async function (algodclient, txId) {
    let lastround = (await algodClient.status()).lastRound;
    while (true) {
        const pendingInfo = await algodClient.pendingTransactionInformation(txId);
        if (pendingInfo.round !== null && pendingInfo.round > 0) {
            //Got the completed Transaction
            console.log("Transaction " + pendingInfo.tx + " confirmed in round " + pendingInfo.round);
            break;
        }
        lastround++;
        await algodclient.statusAfterBlock(lastround);
    }
};
const transactionBroadcaster = async(signedTxn)=>{
    try{
        let tx = await algodClient.sendRawTransaction(signedTxn.blob);
       console.log(tx);

    }
    catch(e){
        console.log(e);
    }
    
  }


export {transactionBroadcaster}