import {ref} from 'vue';
export default function useReservaService (){
    const evento = useState('evento',()=>{})
    function selecionarEvento(evento){
        evento.value = evento;
    }  

    return {
        evento,
        selecionarEvento
    }
}