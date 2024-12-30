import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router"
import Autenticador from '../../Auth/Autenticador.js'

import styles from './Login.module.css'
import InputLogin from './InputLogin.jsx'
import ForgetPass from './ForgetPass.jsx'


const Login = () => {

  //Autenticador()

  const [username, SetUsername] = useState("")
  const [password, SetPassword] = useState("")
  const [erro, SetErro] = useState("")
  let navigate = useNavigate();

  const HandleSubmit = async (event) => {
      event.preventDefault()
      SetErro("");

    try {
      await axios.post("http://localhost:3001/login", { username, password }, { withCredentials: true });
      console.log("Login feito com sucesso")
      navigate("/menu");

    } catch (err) {
      console.log(err)
      SetErro(err.response?.data?.error || "Erro desconhecido");
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
        {erro && <p style={{ color: "red" }}>{erro}</p>}
      </div>
    </div>
  )
}

export default Login
