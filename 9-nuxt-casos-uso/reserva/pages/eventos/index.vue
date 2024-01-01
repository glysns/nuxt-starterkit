<template>
    <div>
        <h1>Eventos</h1>
        <ul>
            <li v-for="i in eventos">
                <NuxtLink :to="`/eventos/${i.id}`" @click="selecionarEvento(i)">
                    {{ i.id }} - {{ i.titulo }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
// Comada de Service
const {listEventos} = usePublicApi();
// 1 Linha para consultar uma api e exibir e jogar em uma variável 
const {body:eventos} = await listEventos();
// Transportando um objeto de uma pagina para outra 
const { selecionarEvento } = useReservaService();
</script>
