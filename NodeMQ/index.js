import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const secretKey = process.env.SECRET_KEY;

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.options('*', cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

const dbConfig = {
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
};

const createConnection = async () => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log("Conectado ao banco de dados MariaDB.");
    return connection;
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    throw err;
  }
};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const connection = await createConnection();
    const [results] = await connection.query("SELECT * FROM login WHERE usuario = ?", [username]);


    if(results.length === 0){
        console.log("Usuário inválido.")
        return res.status(401).json({ error: "Usuário inválido." });
    }

    const user = results[0];
    const isMatch = password.localeCompare(user.senha)

    if(isMatch != 0){
        console.log("Senha inválida.")
        return res.status(401).json({ error: "Senha inválida." });
    }

    const tokenMQ = jwt.sign({ username: user.usuario }, secretKey, { expiresIn: "1h" });
    res.cookie('tokenMQ', tokenMQ, { httpOnly: false, secure: false, sameSite: 'Lax', maxAge: 3600000 });
    res.json({message: "Login realizado com sucesso"})

  } catch (err) {
    console.error("Erro no servidor:", err);
    res.status(500).json({ error: "Erro no servidor." });
  }
});

app.get("/validarToken", (req, res) => {
    const token = req.cookies.tokenMQ

    if(!token){
      return res.status(401).json({valido: false})
    }

    try{
      jwt.verify(token, secretKey)
      res.json({valido: true})
    }
    catch(error){
      res.status(401).json({valido: false})
    }

});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
