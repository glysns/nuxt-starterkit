export const useReservaService = () => {
    const evento = useState('evento',()=>{})
    
    function selecionarEvento(eventoSelecionado){
        evento.value = eventoSelecionado;
    }  
    
    return {
        evento,
        selecionarEvento
    }
}