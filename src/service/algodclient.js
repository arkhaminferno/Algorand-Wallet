import algosdk from "algosdk";

const algodToken = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const algodServer = "http://localhost";
const algodPort = 4001;

let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);



const ClientSetup = async () => {
try{
    console.log(await algodClient .status());
}
catch(error){
    console.log(error);
}
    
}

export {ClientSetup}