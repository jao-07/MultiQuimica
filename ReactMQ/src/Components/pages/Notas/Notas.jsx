import React from 'react'
import { useState } from 'react'
import styles from './Notas.module.css'
import Item from './Item.jsx'
import JanelaLateral from './JanelaLateral.jsx'

const Notas = () => {

    const notas = 
    [{id: 1, nome:"Michelle Patrícia", valor:"128,90", data:"2025-03-12", paga: 0},
     {id: 2, nome:"João Victor Evangelista Cruz", valor:"64,30", data:"2025-02-07", paga: 1},
     {id: 3, nome:"Washington Francisco", valor:"77,77", data:"2025-02-21", paga: 0},
     {id: 4, nome:"Washington Francisco", valor:"277,77", data:"2025-02-17", paga: 0}
    ]

    const produtos = [
        {nome: "Gel Pinho", quantidade: "2", tamanho: "2L"},
        {nome: "Desinfetante Capim Limão", quantidade: "1", tamanho: "5L"},
        {nome: "Cera Líquida", quantidade: "3", tamanho: "2L"}
    ]

    return (
        <div className={styles.container}>
            <JanelaLateral />
            <div className={styles.lista}>
                {
                    notas.map((item) => {
                        return(
                            <div key={item.id}>
                                <Item nota={item} produtos={produtos}/>
                            </div> 
                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default Notas