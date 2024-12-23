import React from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import styles from './InputLogin.module.css'

const InputLogin = ({tipo, place, icon, ...rest}) => {

    const icons = {FaUser, FaLock}

    const DynamicIcon = ({ iconName, ...props }) => {
        const Icon = icons[iconName];
        return <Icon {...props} /> ;
    };

    return (
        <div className={styles.input_field}>
            <input type={tipo} placeholder={place} {...rest}/>
            <DynamicIcon iconName={icon} className={styles.icon}/>
        </div>
    )
}

export default InputLogin
