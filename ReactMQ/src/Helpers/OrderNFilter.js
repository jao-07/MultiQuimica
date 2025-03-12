const OrderNFilter = (notas, vetorFiltro, vetorSearch, tamanho) => {

    var notasFiltered = vetorSearch[0].length > 0 ? notas.filter(nota => nota.nome.toLowerCase().includes(vetorSearch[0].toLowerCase())) : notas

    notasFiltered = vetorSearch[1].length > 0 ? notas.filter(nota => nota.id == vetorSearch[1]) : notasFiltered

    notasFiltered = vetorSearch[2].length > 0 ? notas.filter(nota => nota.data.slice(0,10) == vetorSearch[2]) : notasFiltered

    if(vetorFiltro[0] == 1)
        notasFiltered = notasFiltered.sort((a, b) => a.id - b.id)
    else if(vetorFiltro[0] == 2)
        notasFiltered = notasFiltered.sort((a, b) => b.id - a.id)

    if(vetorFiltro[1] == 1)
        notasFiltered = notasFiltered.sort((a, b) => b.valor - a.valor)
    else if(vetorFiltro[1] == 2)
        notasFiltered = notasFiltered.sort((a, b) => a.valor - b.valor)

    if(vetorFiltro[2] == 1)
        notasFiltered = notasFiltered.sort((a, b) => a.nome.localeCompare(b.nome))
    else if(vetorFiltro[2] == 2)
        notasFiltered = notasFiltered.sort((a, b) => b.nome.localeCompare(a.nome))

    const hoje = Date.now()

    if(vetorFiltro[3] == 1)
        notasFiltered = notasFiltered.filter(nota => nota.paga == 1)
    else if(vetorFiltro[3] == 2)
        notasFiltered = notasFiltered.filter(nota => nota.paga == 0 && hoje < new Date(nota.data))
    else if(vetorFiltro[3] == 3)
        notasFiltered = notasFiltered.filter(nota => nota.paga == 0 && hoje >= new Date(nota.data))

    notasFiltered = notasFiltered.slice(0, tamanho)

    return notasFiltered
}

export default OrderNFilter