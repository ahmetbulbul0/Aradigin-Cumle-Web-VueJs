<template>
  <SignIn @signIn="signIn" />
</template>

<script setup>
import store from "../store";
import SignIn from "../components/SignIn.vue";

function signIn(credentials) {
  store.dispatch("signIn", credentials);
}

</script>
