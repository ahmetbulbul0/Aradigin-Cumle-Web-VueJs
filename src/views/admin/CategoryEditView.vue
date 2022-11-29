<template>
    <AdminViewLayout>
        <template v-slot:realBody>
            <CategoryEdit :data="category.data.data" @edit="edit" :errors="errors" />
        </template>
    </AdminViewLayout>
</template>

<script setup>
import AdminViewLayout from '../layouts/AdminViewLayout.vue';
import CategoryEdit from '../../components/admin/CategoryEdit.vue';
import store from '../../store';
import { useRoute } from "vue-router";
import { getRequest, patchRequest } from '../../api';
import { ref } from '@vue/reactivity';
import router from "../../router";

const route = useRoute();
const categorySlug = route.params.categorySlug;
const category = await getRequest(`categories/${categorySlug}`, { token: store.state.token });
const errors = ref("");

async function edit(credentials) {
    errors.value = "";
    const edit = await patchRequest(`categories/${categorySlug}`, { data: credentials }, { token: store.state.token }).then(function (response) {
        switch (response.status) {
            case 200:
                router.push({ name: "Categories" });
                break;
            case 422:
                errors.value = response.data.errors;
                break;
            default:
                break;
        }
    });
}

</script>