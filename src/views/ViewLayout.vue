<template>
  <Menu />
  <slot name="realBody"></slot>
  <teleport to="#footerArea">
    <Footer />
  </teleport>
</template>



<script setup>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
</script>
