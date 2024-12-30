import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Autenticador = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const validacao = async () => {
      try{
        const resposta = await axios.get("http://localhost:3001/validarToken", { withCredentials: true })
        if(resposta.data.valido){
          navigate('/menu')
        }
      }
      catch(error){
        if (location.pathname !== '/login')
          navigate('/login')
      }
    }

    validacao()
  }, [navigate])
}

export default Autenticador;
