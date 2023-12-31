<template>
    <div>
        <h2><a :href="`/ceps`">Voltar</a></h2>
        <h1>/pages/ceps/index.vue</h1>
        <h2>CEP Escolhido: {{ $route.params.id }}</h2>

        <p>
            {{ cepEscolhido }}
        </p>
    </div>
</template>

<script setup>

import {ref} from 'vue';

const cepsApi = [{ id: 64034400, logradouro: 'Rua das flores' }, { id: 64039230, logradouro: 'Avenida 7 de Setembro' }]

const { id } = useRoute().params //promisse + desestruturação (destruction)

const cepEscolhido = ref({});

onMounted(() => {
    //console.log(cepsApi)
    console.log('CEP Escolhido para eu fazer qualquer coisa na minha lógica', id)

    //filter
    cepEscolhido.value = cepsApi.find(function (el) {
        return el.id == id
    });

    console.log(cepEscolhido)
})
</script>
  