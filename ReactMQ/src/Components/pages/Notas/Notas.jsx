import React, { useEffect, useContext, useState } from 'react'
import styles from './Notas.module.css'
import Item from './Item.jsx'
import JanelaLateral from './JanelaLateral.jsx'
import { AppContext } from '../../../Context.jsx'
import OrderNFilter from '../../../Helpers/OrderNFilter.js'
import loadingSvg from "../../../assets/loading.svg";
import axios from 'axios'

const Notas = () => {

    const contexto = useContext(AppContext);
    const [notas, setNotas] = useState([])

    useEffect(() => {
        const getNotas = async () =>{
            try{
                const response = await axios.get("http://localhost:3000/notas")
                setNotas(response.data)
            }
            catch (error){
                console.error("Erro ao obter as notas: ", error)
            }
        }

        getNotas()
    },[])

    var notasFiltered = OrderNFilter(notas, contexto.vetorFiltro, contexto.vetorSearch, contexto.tamanhoLista);

    if(notas.length == 0){
            return (
                <div style={{display: "flex", justifyContent: "center", marginTop: "300px"}}>
                    <img src={loadingSvg} alt="Carregando"/>
                </div>
            )  
        }

    return (
        <div className={styles.container}>
            <JanelaLateral />
            <div className={styles.lista}>
                {
                    notasFiltered.map((item) => {
                        return(
                            <div key={item.id}>
                                <Item nota={item} />
                            </div> 
                        )
                        
                    })
                }
            </div>
        </div>
    )
}

export default Notas