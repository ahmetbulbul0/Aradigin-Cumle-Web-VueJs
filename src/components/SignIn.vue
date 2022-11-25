<template>
  <div class="outSignIn">
    <div class="inSignIn">
      <div class="outTitle">
        <div class="inTitle">Yazar Girişi</div>
      </div>
      <form class="signInForm" @submit="signIn">
        <div class="formLine">
          <label>Kullanıcı Adınız: </label>
          <div class="outInputText">
            <input type="text" placeholder="Yazar Kullanıcı Adınızı Giriniz" v-model="username" required
              autocomplete="username" />
          </div>
        </div>
        <div class="formLine">
          <label>Parolanız: </label>
          <div class="outInputText">
            <input type="password" placeholder="Yazar Hesap Parolanızı Giriniz" v-model="password" required
              autocomplete="password" />
          </div>
        </div>
        <div class="formLine" v-if="store.state.signInError">
          <div class="outErrorBox">
            <span>{{ store.state.signInError }}</span>
          </div>
        </div>
        <div class="formLine">
          <div class="outButtonBox">
            <button>Giriş Yap</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import store from "../store";

const emit = defineEmits(["signIn"]);

const username = ref("");
const password = ref("");

function signIn(ev) {
  ev.preventDefault();
  const credentials = {
    username: username.value,
    password: password.value,
  };
  emit("signIn", credentials);
}
</script>