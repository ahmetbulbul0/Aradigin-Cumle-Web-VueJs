<template>
  <VisitorViewLayout>
    <template v-slot:realBody>
      <SignIn @signIn="signIn" />
    </template>
  </VisitorViewLayout>
</template>

<script setup>
import VisitorViewLayout from "../layouts/VisitorViewLayout.vue";
import SignIn from "../../components/visitor/SignIn.vue";
import store from "../../store";

function signIn(credentials) {
  store.dispatch("signIn", credentials);
}

</script>
