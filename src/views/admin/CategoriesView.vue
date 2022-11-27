<template>
    <AdminViewLayout>
        <template v-slot:realBody>
            <CategoriesList :data="categories" />
        </template>
    </AdminViewLayout>
</template>

<script setup>
import AdminViewLayout from "../layouts/AdminViewLayout.vue";
import CategoriesList from "../../components/admin/CategoriesList.vue";
import store from "../../store";
import { getRequest } from "../../api";

const categories = await getRequest("categories", { token: store.state.token, params: { limit: 10 } });

</script>