import React from 'react'
import styles from "./ListaProdutos.module.css"

const ListaProdutos = ({vetorProdutos}) => {
  return (
    <div className={styles.container}>
        {
            vetorProdutos.map((produto, index) => {
                return(
                    <div className={styles.produto} key={index}>
                        <div className={styles.nome}> {produto.nome} - {produto.tamanho}</div>
                        <div className={styles.quantidade}> {produto.quantidade} und</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ListaProdutos