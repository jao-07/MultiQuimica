import React from 'react'
import styles from './JanelaLateral.module.css'
import { useContext } from 'react'
import { AppContext } from '../../../Context.jsx'

const JanelaLateral = () =>{

    const contexto = useContext(AppContext);

    const atualizarFiltro = (index, novoValor) => {
        contexto.setVetorFiltro(contexto.vetorFiltro.map((item, i) => (i == index ? novoValor : item)));
    }

    const atualizarSearch = (index, novoValor) => {
        contexto.setVetorSearch(contexto.vetorSearch.map((item, i) => (i == index ? novoValor : item)));
    }

    const handleClick = (event) => {
        const id = event.target.getAttribute("button-id");
        const type = event.target.getAttribute("type-button");
        if (id) {
            if(contexto.vetorFiltro[type] == id)
                atualizarFiltro(type, 0);
            else
                atualizarFiltro(type, id);
        }
    }

    const filter = [
        {tipo: "Tempo", botoes: ["Mais antigas", "Mais novas"]},
        {tipo: "Valor", botoes: ["Maior valor", "Menor valor"]},
        {tipo: "Ordem Alfabética", botoes: ["Crescente", "Decrescente"]},
        {tipo: "Situação", botoes: ["Paga", "Em aberto", "Vencida"]}
    ]

    const search = [
        {label: "Nome:", type: "text"},
        {label: "Nº da nota:", type: "number"},
        {label: "Data:", type: "date"}
    ]

    return (
        <div className={styles.leftWindow}>
            <div className={styles.selectSize}>
                <h3>Tamanho máximo da lista:</h3>
                <select value={contexto.tamanhoLista} onChange={e => contexto.setTamanhoLista(e.target.value)}>
                    <option value="20">20</option>
                    <option value="40">40</option>
                    <option value="60">60</option>
                    <option value="80">80</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className={styles.search}>
                <h2>Buscar por:</h2>
                {
                    search.map((item, i) => {
                        return(
                            <div key={i}>
                                <div>
                                    <p>{item.label}</p>             
                                </div>
                                <input 
                                    type={item.type} 
                                    placeholder='Buscar' 
                                    onChange={e => atualizarSearch(i,e.target.value)}
                                    value={contexto.vetorSearch[i]}/>
                            </div>
                        )
                    })   
                }   
            </div>
            <div className={styles.filter} onClick={handleClick}>
                <h2>Ordenar por:</h2>
                {
                    filter.map((item, i) => {
                        return(
                            <div key={i}>
                                <p>{item.tipo}</p>
                                <div>
                                    {item.botoes.map((botao, index) => (
                                        <p 
                                        button-id={index+1} 
                                        type-button={i} 
                                        key={index}
                                        className={contexto.vetorFiltro[i] == index+1 ? styles.activeButton : styles.notActiveButton}
                                        > 
                                            {botao} 
                                        </p>        
                                    )
                                    )}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default JanelaLateral