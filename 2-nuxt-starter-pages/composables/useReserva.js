import {ref} from 'vue';
export default function useReserva (){
    const item = useState('item',()=>{})
    function selecionar(reservaSelecionada){
        //console.log('selecionando reserva', reservaSelecionada);
        item.value = reservaSelecionada;
        console.log('reserva.value', item.value);
    }  

    return {
        item,
        selecionar
    }
}