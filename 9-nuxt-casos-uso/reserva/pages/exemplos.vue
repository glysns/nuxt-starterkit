<template>
    <div>
     <h1>Exemplos</h1>
     <button @click="dizerBemVindos()">Bem-Vindos</button>
     <p></p>
     <h3>No CAIXA</h3>
     <label >Nome</label>
     <input v-model="espectador"/>
     <button @click="dizerBemVindo()">Bem-Vindo</button>
     {{ espectador }}
     <p/>
     <h3>Na FILA</h3>
     <ul>
        <li v-for="e in espectadores" @click="conferirIngresso(e)" >{{ e.nome }}</li>
     </ul>
    </div>
  </template>

<script setup>
    import {ref} from 'vue'
    const {digaBemVindos, digaBemVindo} = useBoasVindas();

    //No Caixa
    const espectador = ref('')

    //Na Fila
    const espectadores = ref([{nome:'Gleyson', assento:'11A'}, {nome:'Izabelly', assento:'11B'}])
    
    const dizerBemVindos = () => {
        digaBemVindos();
    }
    
    const dizerBemVindo = () => {
        digaBemVindo(espectador.value);
    }

    const conferirIngresso = (espectador) => {
        alert(`Seja Be-vindo ${espectador.nome}, seu assento é ${espectador.assento}`)
    }

</script>

<style>
    li:hover {
        cursor: pointer;
    }
</style>
  