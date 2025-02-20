import React from 'react'
import styles from './CaixaMenu.module.css'
import { FaCircleExclamation } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const CaixaMenu = ({titulo, warning, numero, caminho}) => {
  const navigate = useNavigate()

  return (

    <div className={styles.container}
      onClick={() => navigate(caminho)}>
        <h1>{titulo}</h1>
        {numero > 0 && 
            <div className={styles.mensagem}>
                <p>{numero + warning}</p>
                <div className={styles.icon}>
                    <FaCircleExclamation />
                </div>
            </div>
        }
    </div>
  )
}

export default CaixaMenu