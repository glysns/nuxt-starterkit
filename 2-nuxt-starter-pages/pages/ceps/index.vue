<template>
    <div>
        <h1>/pages/ceps/index.vue</h1>

        <div>{{ ceps }}</div>

        <ul>
            <li v-for="cep in ceps"><a :href="`/ceps/${cep}`">{{ cep }}</a> </li>
        </ul>

        <ul>
            <li v-for="i in cepsObjects"><a :href="`/ceps/${i.id}`">{{ i.cep }} - {{ i  .logradouro }}</a> </li>
        </ul>
    </div>
</template>
<script setup>
    const ceps = [64000040,64000128]

    const cepsObjects = [

    {
   "id":64000040,     
  "cep": "64000-040",
  "logradouro": "Praça da Liberdade",
  "complemento": "",
  "bairro": "Centro",
  "localidade": "Teresina",
  "uf": "PI",
  "ibge": "2211001",
  "gia": "",
  "ddd": "86",
  "siafi": "1219"
},
{
    "id":64000128,     
    "cep": "64000-128",
  "logradouro": "Rua Magalhães Filho",
  "complemento": "(Zona Norte) - de 1/2 a 799/800",
  "bairro": "Centro",
  "localidade": "Teresina",
  "uf": "PI",
  "ibge": "2211001",
  "gia": "",
  "ddd": "86",
  "siafi": "1219"
}

    ]
</script>
  