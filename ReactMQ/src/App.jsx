import React from "react";
import "@fontsource/rubik";
import "@fontsource/poppins";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Components/pages/Menu/Menu.jsx";
import BarraNavegacao from "./Components/Layout/BarraNavegacao.jsx";
import Notas from "./Components/pages/Notas/Notas.jsx";
import Clientes from "./Components/pages/Clientes.jsx";
import Produtos from "./Components/pages/Produtos.jsx";
import EditarNota from "./Components/pages/Notas/EditarNota.jsx";
import { AppProvider } from "./Context.jsx";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <BarraNavegacao /> 
          <Routes>
            <Route path="/" element={<Menu/>} />
            <Route path="/notas" element={<Notas/>} />
            <Route path="notas/editar/:id" element={<EditarNota />}/>
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/clientes" element={<Clientes/>} />
            <Route path="*" element={<Navigate to="/" /> } />
            
          </Routes>
        </Router>
      </div>
    </AppProvider>
    
  );
};

export default App;
