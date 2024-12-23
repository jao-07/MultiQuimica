import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2/promise";

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const secretKey = process.env.SECRET_KEY;

const app = express();
app.use(bodyParser.json());
app.use(cors());

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
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if(!isMatch){
        console.log("Senha inválida.")
        return res.status(401).json({ error: "Senha inválida." });
    }

    // Gera token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "1h" });
    res.json({ token });

  } catch (err) {
    console.error("Erro no servidor:", err);
    res.status(500).json({ error: "Erro no servidor." });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
