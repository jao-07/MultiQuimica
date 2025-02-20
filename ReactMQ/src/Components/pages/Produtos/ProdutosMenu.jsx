import React from 'react'
import styles from './ProdutosMenu.module.css'
import { FaBoxes } from "react-icons/fa";
import Lista from '../Lista';

const ProdutosMenu = () => {

    const produtos = [
        {id: 1, produto: "Gel Pinho", quantidade: 10},
        {id: 2, produto: "Água Sanitária", quantidade: 10},
        {id: 3, produto: "Desinfetante", quantidade: 10}
    ]

    const atributos = ["Produtos", "Quantidade"]

    return (
        <div className={styles.box}>
            <div className={styles.title}>
                <h2>Produtos</h2>
                <FaBoxes className={styles.icon}/>
            </div>
            <div className={styles.list}>
                <Lista itens={produtos} atributos={atributos} />
            </div>
        </div>
    )
}

export default ProdutosMenu