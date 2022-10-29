<template>
  <ViewLayout>
    <template v-slot:realBody>
      <suspense>
        <router-view />
      </suspense>
    </template>
  </ViewLayout>
</template>

<script setup>
import { RouterView } from "vue-router";
import ViewLayout from "./views/ViewLayout.vue";
</script>
