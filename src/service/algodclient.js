import algosdk from "algosdk";

const algodToken = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const algodServer = "http://localhost";
const algodPort = 4001;

let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);



const ClientSetup = async () => {
try{
    let instance = await algodClient.getTransactionParams();
    
}
catch(error){
    console.log(error);
}
    
}

export {ClientSetup}