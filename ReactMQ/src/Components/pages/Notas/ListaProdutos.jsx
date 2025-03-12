import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./ListaProdutos.module.css"
import axios from 'axios';
import loadingSvg from "../../../assets/loading.svg";

const ListaProdutos = ({nota}) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/notas/editar/${id}`);
    }

    const [produtos, setProdutos] = useState(null)

    useEffect(() => {
        const getProdutos = async (id) => {
            try{
                const response = await axios.get(`http://localhost:3000/itens-nota/${id}`)
                setProdutos(response.data)
            }
            catch (error){
                console.error(`Erro ao obter os produtos da nota ${id} : `, error)
            }
        }

        getProdutos(nota.id)
    },[])

    if(produtos == null){
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={loadingSvg} alt="Carregando"/>
            </div>
        )  
    } 

    var valorTotalNota = 0

    return (
        <div className={styles.container}>
            <table className={styles.tabela}>
                <thead>
                    <tr className={styles.produto}>
                        <th className={styles.nome}> Produto</th>
                        <th className={styles.quantidade}>Quantidade</th>
                        <th className={styles.unit}>Valor Unit.</th>
                        <th className={styles.total}>Valor Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map((produto) => {
                            valorTotalNota += produto.valor_total
                            return(
                                <tr className={styles.produto} key={produto.id}>
                                    <td className={styles.nome}> {produto.nome} - {produto.tamanho}</td>
                                    <td className={styles.quantidade}> {produto.quantidade} und</td>
                                    <td className={styles.unit}> R$ {produto.valor_unit.toFixed(2)} </td>
                                    <td className={styles.total}> R$ {produto.valor_total.toFixed(2)} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className={styles.totalNota}>Valor total da nota: R$ {valorTotalNota.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>    
            <div className={styles.editar}>
                <button onClick={() => handleClick(nota.id)}>Editar nota</button>
            </div>
        </div> 
    )
}

export default ListaProdutos