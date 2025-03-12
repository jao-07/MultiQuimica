import dotenv from "dotenv"
import express from "express"
import mysql from "mysql2/promise"
import cors from "cors"

const PORT = process.env.PORT || 3000

dotenv.config();

const dbHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  }));
app.use(express.json())

const dbConfig = {
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName
};

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig)

    return connection

  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err)
    throw err;
  }
};

app.get("/notas", async (req, res) => {
    try{
        const connection = await createConnection()
        const [rows] = await connection.query('SELECT * FROM notas');
        res.json(rows)
        await connection.end();
    }
    catch (error) {
        console.error('Erro ao obter as notas', error)
        res.status(500).json({error: 'Erro ao obter as notas'}) 
    }
})

app.get("/nota/:id", async (req, res) => {
  try{
    const connection = await createConnection()
    const id = req.params.id
    const [rows] = await connection.query("SELECT nome, data, paga FROM notas WHERE id =" + id)
    res.json(rows)
    await connection.end()
  }
  catch (error) {
    console.error(`Erro ao obter a a nota ${id}`)
  }
})

app.get("/itens-nota/:id", async (req, res) =>{
  try{
    const connection = await createConnection()
    const id = req.params.id
    const query = `SELECT i.id, i.quantidade, i.valor_unit, i.valor_total, p.nome, p.tamanho FROM itens_nota i, produtos p WHERE i.id_produto = p.id AND i.id_nota = ${id} ORDER BY p.nome`
    const [rows] = await connection.query(query)
    res.json(rows)
    await connection.end()
  }
  catch (error){
    console.error('Erro ao obter os produtos', error)
        res.status(500).json({error: 'Erro ao obter os produtos'})
  }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});