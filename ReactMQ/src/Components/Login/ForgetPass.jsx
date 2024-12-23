import React from 'react'
import styles from './ForgetPass.module.css'

const ForgetPass = ({url}) => {
  return (
    <div className={styles.recall_forget}>
        <a href={url}> Esqueceu a senha?</a>
    </div>
  )
}

export default ForgetPass
