import algosdk from "algosdk";

const algodToken = "";
const algodServer = "https://api.testnet.algoexplorer.io/v2";
const algodPort = 443;

const postHeader = {   
    'content-type' : 'application/x-binary'
 }

let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);




export {algodClient,postHeader}