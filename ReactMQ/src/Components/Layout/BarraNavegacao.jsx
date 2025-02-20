import { NavLink, useLocation } from "react-router-dom";
import styles from "./BarraNavegacao.module.css"

const BarraNavegacao = () => {
    return(
        <nav className={styles.barra}>
            <ul className={styles.lista}>
                <li className={styles.link} >
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? styles.active : styles.notActive}>
                        Menu 
                    </NavLink > 
                </li>
                <li className={styles.link}>
                    <NavLink 
                        to="/notas" 
                        className={({ isActive }) => isActive ? styles.active : styles.notActive}>
                        Notas 
                    </NavLink > 
                </li>
                <li className={styles.link} >
                    <NavLink 
                        to="/produtos" 
                        className={({ isActive }) => isActive ? styles.active : styles.notActive}>
                        Produtos
                    </NavLink > 
                </li>
                <li className={styles.link} >
                    <NavLink 
                        to="/clientes" 
                        className={({ isActive }) => isActive ? styles.active : styles.notActive}>
                        Clientes
                    </NavLink > 
                </li>
            </ul>
        </nav> 
    )
}

//<div className={styles.container}>
export default BarraNavegacao