<template>
    <div class="outDeleteConfirm">
        <div class="inDeleteConfirm">
            <div class="header">
                <span>{{ data.name }} Silme İşlemini Onayla</span>
            </div>
            <div class="body">
                <div class="outItemDetail">
                    <div class="inItemDetail">
                        <div class="itemDetail">
                            <div class="line" v-for="column in data.columns" :key="column.label">
                                <label>{{ column.label }}:</label>
                                <span>{{ column.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="outBasictext">
                    <div class="inBasicText">
                        yukarıda bilgileri verilen {{ data.text }} silme işlemini onaylıyormusunuz?
                    </div>
                </div>
            </div>
            <div class="delete-footer">
                <a @click="deleteConfirm('ok')">Onayla</a>
                <a @click="deleteConfirm('cancel')">Vazgeçtim, İptal Et</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["data"]);
const emit = defineEmits(["signIn"]);
const data = props.data;
function deleteConfirm(result) {
    emit("deleteConfirm", result);
}
</script>