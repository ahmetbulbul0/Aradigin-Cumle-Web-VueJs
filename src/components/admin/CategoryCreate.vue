<template>
    <div class="outBigForm">
        <div class="inBigForm">
            <div class="outBigFormTitle">
                <span class="inBigFormTitle">
                    Yeni Kategori Oluştur
                </span>
            </div>
            <div class="outBigFormContent">
                <form class="inBigFormContent" @submit="create">
                    <div class="line">
                        <span class="inputLabel">Adı:</span>
                        <div class="outInputText">
                            <input type="text" v-model="name" placeholder="Kategori Adı..." required>
                        </div>
                    </div>
                    <div class="line" v-if="errors.name">
                        <div class="outErrorBox">
                            <span>
                                Bu isimde bir kategori zaten var, lütfen başka bir ad kullanınız
                            </span>
                        </div>
                    </div>
                    <div class="line">
                        <span class="inputLabel">Tip:</span>
                        <div class="outRadioBox" id="outRadioBox">
                            <label>
                                Ana Kategori
                                <input type="radio" v-model="type" value="main">
                            </label>
                            <label>
                                Alt Kategori
                                <input type="radio" v-model="type" value="sub">
                            </label>
                        </div>
                    </div>
                    <div class="line" v-if="type == 'sub'">
                        <span class="inputLabel">Ana Kategori:</span>
                        <div class="outSelectBox">
                            <select name="category" v-model="parentCategory">
                                <option selected disabled value="">Ana Kategoriyi Seç</option>
                                <option v-for="item in categories.data.data" :key="item.no" :value="item.no">{{
                                        item.name
                                }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="line">
                        <div class="outSubmitBox">
                            <button>
                                Oluştur
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { getRequest } from "../../api";
import store from "../../store";

const categories = await getRequest("categories", { token: store.state.token });

const name = ref("");
const type = ref("");
const parentCategory = ref("");

const emit = defineEmits(["create"]);
const props = defineProps(["errors"]);

function create(ev) {
    ev.preventDefault();
    const credentials = {};
    credentials.name = name.value;
    if (type.value == "sub") {
        credentials.isChildren = true;
        credentials.isParent = false;
        credentials.parentCategory = parentCategory.value;
    } else if (type.value == "main") {
        credentials.isChildren = false;
        credentials.isParent = true;
        credentials.parentCategory = parentCategory.value;
    }
    console.log(credentials);
    emit("create", credentials);
}

</script>