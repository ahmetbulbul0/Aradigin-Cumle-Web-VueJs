<template>
    <ErrorViewLayout>
        <template v-slot:realBody>
            <Error :code="errorCode" :text="errorText" />
        </template>
    </ErrorViewLayout>

</template>

<script setup>
import ErrorViewLayout from "../layouts/ErrorViewLayout.vue";
import { defineAsyncComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
var errorText, errorCode;

const Error = defineAsyncComponent((errorCode, errorText) =>
    import("../../components/error/Error.vue")
);

errorCode = route.params.errorCode;

switch (errorCode) {
    case "404":
        errorText = "Sayfa Bulunamadı";
        break;
    default:
        errorText = "Bilinmeyen Hata"
        break;
}

</script>
    