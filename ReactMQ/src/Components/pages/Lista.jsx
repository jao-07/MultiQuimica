import React from 'react'
import styles from './Lista.module.css'

function Lista({itens, atributos}) {
  return (
    <div>
        <div className={styles.item}>
          <div className={styles.nomeDesc}> {atributos[0]} </div>
          <div className={styles.qtdDesc}>{atributos[1]}</div>
        </div>
        {
        itens.map((item) => (
            <div className={styles.item} key={item.id}>
                <div className={styles.nome}>{item.atributos[0]}</div>
                <div className={styles.qtd}>{item.atributos[1]}</div>
            </div>
        ))
        }
    </div>
  )
}

export default Lista