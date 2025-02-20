import React from 'react'
import styles from './Menu.module.css'
import CaixaMenu from './CaixaMenu'

const Menu = () => {

    var numNotas = 3
    var numProdutos = 3

    return (
        <div className={styles.menu}>
            <CaixaMenu 
                titulo="Notas"
                warning=" notas vencendo hoje!"
                numero={numNotas}
                caminho="/notas"
            />
            <CaixaMenu 
                titulo="Produtos"
                warning=" produtos acabando!"
                numero={numProdutos}
                caminho="/produtos"
            />
            <CaixaMenu 
                titulo="Clientes"
                warning=""
                numero={0}
                caminho="/clientes"
            />
        </div>
    )
}

export default Menu