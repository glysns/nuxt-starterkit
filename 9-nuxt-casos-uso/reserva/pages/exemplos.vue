<template>
    <div>
        <h1>Exemplos</h1>
        <button @click="dizerBemVindos()">Bem-Vindos</button>
        <p></p>
        <h3>No CAIXA</h3>
        <label>Nome</label>
        <input v-model="espectador" />
        <button @click="dizerBemVindo()">Bem-Vindo</button>
        {{ espectador }}
        <p />
        <h3>Na FILA</h3>
        <ul>
            <li v-for="e in espectadores" @click="conferirIngresso(e)">{{ e.nome }}</li>
        </ul>
        <h3>FUNCOES</h3>
        <h4 @click="a()">Função A</h4>
        <h4 @click="b()">Função B</h4>
        <h4 @click="c()">Função C</h4>
        <h4 @click="d('Gleyson')">Função D</h4>
        <h4 @click="e('Izabelly')">Função E</h4>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const { digaBemVindos, digaBemVindo } = useBoasVindas();

//No Caixa
const espectador = ref('')

//Na Fila
const espectadores = ref([{ nome: 'Gleyson', assento: '11A' }, { nome: 'Izabelly', assento: '11B' }])

const dizerBemVindos = () => {
    digaBemVindos();
}

const dizerBemVindo = () => {
    digaBemVindo(espectador.value);
}

const conferirIngresso = (espectador) => {
    alert(`Seja Be-vindo ${espectador.nome}, seu assento é ${espectador.assento}`)
}

const a = function() {
  alert("Hello World A!");
}

const b = () => {
  //return "Hello World!";
  alert("Hello World B!");
}

const c = () => alert("Hello World C!");;

const d = (p) => alert("Hello " + p);

const e = p => alert("Hello " + p);

</script>

<style>
li:hover {
    cursor: pointer;
}
h4:hover {
    cursor: pointer;
}
</style>
  