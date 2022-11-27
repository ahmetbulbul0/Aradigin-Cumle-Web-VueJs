<template>
    <div class="outError">
        <div class="inError">
            <div class="outCode">
                <span>{{ errorCode }}</span>
            </div>
            <div class="outInformation">
                <span>{{ errorText }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
var errorText, errorCode;

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
    