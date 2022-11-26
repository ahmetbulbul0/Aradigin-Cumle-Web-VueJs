import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { postRequest } from "../api";
const env = import.meta.env;

const store = createStore({
  state: {
    token: "",
    signInError: "",
    user: {
        username: "",
        fullName: "",
    }
  },

  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserData(state, data) {
        state.user.username = data.username;
        state.user.fullName = data.fullName;
      },
    setSignInError(state) {
      state.signInError = "Hatalı Giriş Bilgileri";
    },
    resetSignInError(state) {
      state.signInError = "";
    },
  },
  actions: {
    async signIn(state, credentials) {
      state.commit("resetSignInError");
      await postRequest("login", { data: credentials }).then((response) => {
        switch (response.data.status) {
          case 200:
            state.commit("setToken", response.data.token);
            state.commit("setUserData", response.data.user);
            state.dispatch("goToUrl", env.VITE_DASHBOARD_URL);
            break;
          case 404:
            state.commit("setSignInError");
            break;
          default:
            state.commit("setSignInError");
            break;
        }
      })
    },
    goToUrl(state, url) {
      window.location.href = url;
    }
  },
  modules: {},
  plugins: [createPersistedState()],
});

export default store;
