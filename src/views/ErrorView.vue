<template>
    <div v-if="errorCode">
        {{ errorCode }}
    </div>
</template>
  
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const errorCode = route.params.errorCode;
</script>
    