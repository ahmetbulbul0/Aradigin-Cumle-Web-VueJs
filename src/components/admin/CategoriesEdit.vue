<template>
    <div class="outBigForm">
        <div class="inBigForm">
            <div class="outBigFormTitle">
                <span class="inBigFormTitle">
                    Kategori Düzenle
                </span>
            </div>
            <div class="outBigFormContent">
                <form class="inBigFormContent" @submit="edit">
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
                                Düzenlemeyi Kaydet
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

const emit = defineEmits(["edit"]);
const props = defineProps(["data", "errors"]);
const data = props.data;

const categories = await getRequest("categories", { token: store.state.token });

const name = ref(data.name);
const type = ref("");
const parentCategory = ref("");

if (data.isParent == true && data.isChildren == false) {
    type.value = "main";
} else if (data.isParent == false && data.isChildren == true) {
    type.value = "sub";
}

function edit(ev) {
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
    emit("edit", credentials);
}

</script>