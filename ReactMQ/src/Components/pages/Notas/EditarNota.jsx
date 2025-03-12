import React from 'react'
import styles from "./EditarNota.module.css"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function EditarNota() {

  const [nota, SetNota] = useState({ nome: "", data: "", paga: 0})
  const params = useParams()

  useEffect(() => {
    const getNota = async (id) => {
      try{
        const response = await axios.get(`http://localhost:3000/nota/${id}`)
        SetNota(response.data[0])
      }
      catch (error) {
        console.error(`Erro ao obter a nota ${id}`, error)
      }
    }

    getNota(params.id)
  }, [])

  const handleChangeNotas = (atributo, valor) =>{
    SetNota(notaAnt => ({
      ...notaAnt,
      [atributo]: valor
    }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <input type="text" value={nota.nome} onChange={e => handleChangeNotas("nome", e.target.value)}/>
        <p>Your name is {nota.nome}.</p>
      </div>
    </div>
  )
}

export default EditarNota