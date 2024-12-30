import React, {useEffect, useState} from 'react';
import { Navigate} from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {

  const [autenticado, setAutenticado] = useState(null)

  useEffect(() => {
    const verificador = async () => {
      try{
        const resposta = await axios.get("http://localhost:3001/validarToken", { withCredentials: true })
        setAutenticado(resposta.data.valido)
      }
      catch(error){
        setAutenticado(false)
      }
    }
    
    verificador()
  }, [])

  
  if(autenticado === null)
    return <div>Carregando...</div>

  if (autenticado === false)
    return <Navigate to="/login" replace />;
  

  return  (
    <>
      {children}
    </>
  )
};

export default ProtectedRoute;
