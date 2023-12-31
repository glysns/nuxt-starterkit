<template>
    <div>
        <h1>/pages/ceps/index.vue</h1>

        <div>{{ ceps }}</div>

        <ul>
            <li v-for="cep in ceps"><a :href="`/ceps/${cep}`">{{ cep }}</a> </li>
        </ul>
    </div>
</template>
<script setup>
    const ceps = [64034400,64039230]
</script>
  