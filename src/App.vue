<template>
  <layout>
    <template v-slot:realBody>
      <suspense>
        <router-view />
      </suspense>
    </template>
  </layout>
</template>

<script setup>
import { RouterView } from "vue-router";
import layout from "./views/layout.vue";

</script>