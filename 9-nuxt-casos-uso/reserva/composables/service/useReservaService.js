export const useReservaService = () => {
    
    const evento = useState('evento',()=>{})
    const selecionarEvento = object => evento.value = object;
    
    const confirmarReserva = (cadastro) => {
        console.log('confirmando ....')
        console.log('evento', evento.value);
        console.log('cadastro', cadastro.value);
    }
    
    return {evento,selecionarEvento, confirmarReserva}
}