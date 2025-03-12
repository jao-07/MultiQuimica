import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
        const [vetorFiltro, setVetorFiltro] = useState([0,0,0,0])
        const [vetorSearch, setVetorSearch] = useState(["", "", ""])
        const [tamanhoLista, setTamanhoLista] = useState(20)

    return (
        <AppContext.Provider value={{ vetorFiltro, setVetorFiltro, vetorSearch, setVetorSearch, tamanhoLista, setTamanhoLista}}>
            {children}
        </AppContext.Provider>
    );
}
