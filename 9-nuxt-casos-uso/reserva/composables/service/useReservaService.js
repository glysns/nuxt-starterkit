export const useReservaService = () => {
    const evento = useState('evento',()=>{})
    const selecionarEvento = object => evento.value = object; 
    /*
    function selecionarEvento(eventoSelecionado){
        evento.value = eventoSelecionado;
    } 
    */ 
    return {
        evento,
        selecionarEvento
    }
}