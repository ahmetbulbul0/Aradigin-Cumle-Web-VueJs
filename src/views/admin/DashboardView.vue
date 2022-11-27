<template>
    <AdminViewLayout>
        <template v-slot:realBody>
            <Values4Box />
        </template>
    </AdminViewLayout>
</template>

<script setup>
import AdminViewLayout from "../layouts/AdminViewLayout.vue";
import Values4Box from "../../components/admin/Values4Box.vue";
</script>