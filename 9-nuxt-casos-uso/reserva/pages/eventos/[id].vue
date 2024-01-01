<template>
    <div>
        <h2><NuxtLink to="/eventos"> Voltar </NuxtLink></h2>
        <h1>/pages/eventos/[ID].vue</h1>
        <h2>Evento Escolhido: {{ $route.params.id }}</h2>
        <h2>Evento:  {{ evento?.id }}</h2>
        <p>
            {{ evento }}
        </p>

        <p/>
        <button @click="confirmar()" >Confirmar</button>
    </div>
</template>

<script setup>
const {evento, confirmarReserva} = useReservaService();
const cadastro = ref({
  nome: "Gleyson Sampaio",
  email: "gleyson.s@hotmail.com",
  cpf: "00432922326",
  observacao: "Rua das Marias, 375 - Teresina PI",
});

const confirmar = async () => {
    //confirmarReserva(cadastro)
    const {status, body} = await confirmarReserva(cadastro)
    console.log('status', status);
    console.log('body', body);
}
</script>
  