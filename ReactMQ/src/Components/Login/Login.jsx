import React from 'react'
import { useState } from 'react'
import styles from './Login.module.css'
import InputLogin from './InputLogin.jsx'
import ForgetPass from './ForgetPass.jsx'

const Login = () => {

    const [username, SetUsername] = useState("")
    const [password, SetPassword] = useState("")
    const [erro, SetErro] = useState("")

    const HandleSubmit = async (event) => {
        event.preventDefault()
        SetErro("");

    try {
      const response = await axios.post("http://localhost:3001/login", { username, password });
      navigate("/menu");

    } catch (err) {
      SetErro(err.response?.data?.error || "Erro ao fazer login.");
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={HandleSubmit}>
            <h1>Multiquímica</h1>
            <InputLogin tipo="text" place="Usuário" icon="FaUser" onChange={(e) => SetUsername(e.target.value)}/>
            <InputLogin tipo="password" place="Senha" icon="FaLock" onChange={(e) => SetPassword(e.target.value)}/>
            <ForgetPass url="EsqueciMinhaSenha" />
            <button>Entrar</button>
        </form>
        {erro && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  )
}

export default Login
