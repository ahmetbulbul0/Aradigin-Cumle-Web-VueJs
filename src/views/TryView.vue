<template>
  <div>
    <router-link :to="{ name: 'Try', params: { page: 1 } }">try link to page 1</router-link>
    <br>
    <router-link :to="{ name: 'Try', params: { page: 2 } }">try link to page 2</router-link>
    <br>
    <router-link :to="{ name: 'Try', params: { page: 3 } }">try link to page 3</router-link>
    <br>
    <router-link :to="{ name: 'Try', params: { page: 4 } }">try link to page 4</router-link>
    <br>
    <router-link :to="{ name: 'Try', params: { page: 5 } }">try link to page 5</router-link>
    <br>
    <router-link :to="{ name: 'Try', params: { page: 6 } }">try link to page 6</router-link>
    <br>
    <router-link :to="{ name: 'Try', params: { page: 7 } }">try link to page 7</router-link>
    <br>
  </div>
</template>

<script setup>
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const routeParams = route.params;

// console.log("merhaba", routeParams);

watch(
  () => route.params,
  (toParams, previousParams) => {
    console.log("toParams", toParams, "previousParams", previousParams)
  }
);
</script>
