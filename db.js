//Importando Módulos
import mysql from 'mysql2'
import dotenv from 'dotenv'

//Configurando Dotenv
dotenv.config()

//Criando Conexão com o Banco de Dados Mysql
const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

//Exportando Função
export default database