import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88833322209;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);
