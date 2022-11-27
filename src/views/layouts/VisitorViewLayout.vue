<template>
  <Menu />
  <div class="pageContainer">
    <div class="contentWrap">
      <slot name="realBody"></slot>
    </div>
      <Footer />
  </div>


</template>

<script setup>
import Menu from "../../components/Visitor/Menu.vue";
import Footer from "../../components/Visitor/Footer.vue";
</script>
