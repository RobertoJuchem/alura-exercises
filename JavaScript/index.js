import { Cliente } from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./sistemaAutenticacao.js"

const diretor = new Diretor('Roberto', 20000,"0123344554")
diretor.cadastrarSenha('123456')

const gerente = new Gerente('Alana', 15000, "99988877741")
gerente.cadastrarSenha(987654)

const cliente = new Cliente('Isabela','00011122233345', '123')

const diretorLogado = SistemaAutenticacao.login(diretor, '123456')
const gerenteLogado = SistemaAutenticacao.login(gerente, 987654)
const clienteLogado = SistemaAutenticacao.login(cliente, '123')

console.log(diretorLogado)
console.log(gerenteLogado)
console.log(clienteLogado)