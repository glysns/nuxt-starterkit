export const useReservaService = () => {
    
    const evento = useState('evento',()=>{})
    const selecionarEvento = object => evento.value = object; 
    
    return {evento,selecionarEvento}
}