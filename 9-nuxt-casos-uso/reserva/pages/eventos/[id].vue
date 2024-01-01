<template>
    <div>
        <h2>
            <NuxtLink to="/eventos"> Voltar </NuxtLink>
        </h2>
        <h1>/pages/eventos/[ID].vue</h1>
        <h2>Evento Escolhido: {{ $route.params.id }}</h2>
        <h2>Evento: {{ evento?.id }}</h2>
        <p>
            {{ evento }}
        </p>

        <p />
        
        <input v-model="cadastro.nome" type="text" id="nome" name="nome" placeholder="Nome Completo" />
        <input v-model="cadastro.email" type="text" id="email" name="email" placeholder="email@email.com" />
        <input v-model="cadastro.cpf"   type="text" id="cpf" name="cpf" placeholder="006.865.778-09" />
        <input v-model="cadastro.observacao"   type="text" id="observacao" name="observacao" placeholder="Entregar em: Rua das Marias, 375 - Teresina PI" />

        <h3 v-if="waiting">Processando ... </h3>
        <button @click="confirmar()">Confirmar</button>
    </div>
</template>

<script setup>
//https://rafamed.dev/blog/how-to-add-form-validation-to-your-nuxt-3-application
const { evento, waiting, confirmarReserva } = useReservaService();
const cadastro = ref({
    nome: "Gleyson Sampaio",
    email: "gleyson.s@hotmail.com",
    cpf: "00432922326",
    observacao: "Rua das Marias, 375 - Teresina PI",
});

const confirmar = async () => {
    //confirmarReserva(cadastro)
    const { status, body } = await confirmarReserva(cadastro)
    console.log('status', status);
    console.log('body', body);
}
</script>
  