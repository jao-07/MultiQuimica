import React from 'react'
import styles from './Item.module.css'
import ListaProdutos from './ListaProdutos'
import { useState } from 'react'

const Item = ({nota}) => {

    const [visivel, setVisivel] = useState(false)

    const definirCor = (nota) => {
        let hoje = Date.now()
        let dataNota = new Date(nota.data)
        if (nota.paga === 1) return "green";
        else if (hoje > dataNota) return "red";
        else return "blue";
    }

    const dataFormatada = nota.data.slice(0,10)
    const dataNota = new Date(nota.data)
    const hoje = Date.now()

    return (
        <div onClick={() => setVisivel(!visivel)}>
            <div className={styles.item} style={{color: definirCor(nota)}}>
                <div className={styles.firstLine}>
                    <div className={styles.nome}>{nota.nome}</div>
                    <div className={styles.valor}>{nota.paga ? "PAGA" : (hoje > dataNota ? "VENCIDA" :"EM ABERTO" )}</div>
                </div>
                <div className={styles.secondLine}>
                    <div className={styles.data}>{dataFormatada}</div>
                    <div className={styles.numero}>Nº: {nota.id}</div>
                </div>
                
            </div>
            {visivel && <ListaProdutos nota={nota}/>}
        </div>
    )
}

export default Item