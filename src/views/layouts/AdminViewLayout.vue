<template>
  <Menu :title="menuTitle" />
  <div class="pageContainer">
    <div class="contentWrap">
      <slot name="realBody"></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Menu from "../../components/admin/Menu.vue";
import Footer from "../../components/admin/Footer.vue";
import "../../assets/css/private.css";
const menuTitle = "YazarPaneli";
</script>
