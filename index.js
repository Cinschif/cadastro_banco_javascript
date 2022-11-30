import {Client} from "./Cliente.js"
import {Account} from "./ContaCorrente.js"
//fica apenas as execuções

const cliente1 = new Client("Cinthia", 10411588718);
const cliente2 = new Client("Duda", 87676523456);


const conta1 = new Account(cliente1 , 1001);
const conta2= new Account(cliente2, 102);
new Account(cliente2, 102);



conta1.depositar (500);

console.log(Account.numeroDeContas);

