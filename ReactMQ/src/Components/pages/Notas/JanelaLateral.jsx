import React from 'react'
import { useState } from 'react'
import styles from './JanelaLateral.module.css'

const JanelaLateral = () =>{

    const [vetorFiltro, setVetorFiltro] = useState([0,0,0,0])

    const atualizarFiltro = (index, novoValor) => {
        setVetorFiltro(vetorFiltro.map((item, i) => (i == index ? novoValor : item)));
      };

    const handleClick = (event) => {
        const id = event.target.getAttribute("button-id");
        const type = event.target.getAttribute("type-button");
        if (id) {
          atualizarFiltro(type, id);
        }
    }

    const botoes = [
        {tipo: "Tempo", botao1: "Mais Antigo", botao2: "Menos Antigo"},
        {tipo: "Valor", botao1: "Maior valor", botao2: "Menor valor"},
        {tipo: "Ordem Alfabética", botao1: "Crescente", botao2: "Decrescente"},
    ]

    return (
        <div className={styles.leftWindow}>
            <div className={styles.search}>  
                <h2>Buscar por:</h2>
                <div>
                    <p>Nome:</p>             
                </div>
                <input type="text" placeholder='Buscar'/>
                <div>
                    <p>Nº da nota:</p>             
                </div>
                <input type="number" placeholder='Buscar'/>    
                <div>
                    <p>Data:</p>             
                </div>
                <input type="date" placeholder='Buscar'/>  
            </div>
            <div className={styles.filter} onClick={handleClick}>
                <h2>Ordenar por:</h2>
                <p>Tempo</p>
                <div>
                    <p button-id='1' type-button="0">Mais antigo</p>
                    <p button-id='2' type-button="0">Mais Atual</p>
                </div>
                <p>Valor</p>
                <div>
                    <p button-id='1' type-button="1">Maior valor</p>
                    <p button-id='2' type-button="1">Menor valor</p>
                </div>
                <p>Alfabética</p>
                <div>
                    <p button-id='1' type-button="2">Crescente</p>
                    <p button-id='2' type-button="2">Decrescente</p>
                </div>
                <p>Nº da Nota</p>
                <div>
                    <p button-id='1' type-button="3">Crescente</p>
                    <p button-id='2' type-button="3">Decrescente</p>
                </div>
            </div>
        </div>
    )
}

export default JanelaLateral