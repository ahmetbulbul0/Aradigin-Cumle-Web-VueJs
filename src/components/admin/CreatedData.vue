<template>
    <div class="outCreatedData">
        <div class="inCreatedData">
            <div class="createdData">
                <div class="titleLine">
                    <span>Yeni {{ objectName }} Oluşturuldu</span>
                </div>
                <div class="line" v-for="column in columns" :key="column.dbName">
                    <label>{{ column.label }}:</label>
                    <span>{{ column.value }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(["data"]);
const objectName = props.data.objectName;
const columns = props.data.columns;
</script>
