// Importando Módulos
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import database from './db.js'
import fileUpload from 'express-fileupload'

// Configurando Aplicação
const app = express()
const Porta = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, 'public')))

// Habilitando Upload de Arquivos
app.use(fileUpload())

// Manipulação de Dados via Rotas
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Configurando o BootStrap
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

// Configurando o Ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Teste de Conexão com o Banco de Dados
database.connect((err) => {
    if(err) throw err
    console.log('Conectado ao MySQL...')
})

// Rota Principal
app.get('/', (req, res) => {
    res.render('pages/home')
})

// Rota para Cadastrar Usuários
app.get('/cadastro', (req, res) => {
    res.render('pages/cadastro')
})

// Rota para exibir Usuários Cadastrados
app.get('/lista_de_usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios'
    database.query(sql, (erro, retorno) => {
        if(erro) throw erro
        res.render('pages/usuarios', {usuarios: retorno})
    })
})

// Rota para Enviar Dados dos Usuários
app.post('/api/cadastrar', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const cpf = req.body.cpf
    // Comando Sql
    const sql = `INSERT INTO usuarios (nome, email, cpf) VALUES ('${nome}', '${email}', '${cpf}')`
    database.query(sql, (erro, retorno) => {
        if(erro) throw erro
        console.log(retorno)
    })
    res.redirect('/cadastro')
})

// Conectando Servidor
app.listen(Porta, () => {
    console.log(`Servidor Conectado...   Porta:${Porta}`)
})