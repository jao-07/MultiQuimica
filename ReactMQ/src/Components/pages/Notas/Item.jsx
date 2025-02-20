import React from 'react'
import styles from './Item.module.css'
import ListaProdutos from './ListaProdutos'
import { useState } from 'react'

const Item = ({nota, produtos}) => {

    const [visivel, setVisivel] = useState(false)

    const definirCor = (nota) => {
        let hoje = Date.now()
        let dataNota = new Date(nota.data)
        if (nota.paga === 1) return "green";
        else if (hoje > dataNota) return "red";
        else return "blue";
    }

    return (
        <div onClick={() => setVisivel(!visivel)}>
            <div className={styles.item} style={{color: definirCor(nota)}}>
                <div className={styles.firstLine}>
                    <div className={styles.nome}>{nota.nome}</div>
                    <div className={styles.valor}>R$ {nota.valor}</div>
                </div>
                <div className={styles.secondLine}>
                    <div className={styles.data}>{nota.data}</div>
                    <div className={styles.numero}>Nº: {nota.id}</div>
                </div>
                
            </div>
            {visivel && <ListaProdutos vetorProdutos={produtos}/>}
        </div>
    )
}

export default Item