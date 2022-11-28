<template>
    <AdminViewLayout>
        <template v-slot:realBody>
            <CreatedData v-if="createdData" :data="createdData" />
            <CategoryCreate v-if="!createdData" @create="create" :errors="errors" />
        </template>
    </AdminViewLayout>
</template>

<script setup>
import AdminViewLayout from '../layouts/AdminViewLayout.vue';
import CategoryCreate from "../../components/admin/CategoryCreate.vue";
import CreatedData from "../../components/admin/CreatedData.vue";
import { postRequest } from '../../api';
import store from "../../store";
import { ref } from '@vue/reactivity';

const errors = ref("");
const createdData = ref("");
const success = ref("");

async function create(credentials) {
    errors.value = "";
    const create = await postRequest("categories", { data: credentials }, { token: store.state.token }).then(function (response) {
        switch (response.status) {
            case 200:
                const created = {
                    objectName: "Kategori",
                    columns: [
                        {
                            label: "Ad",
                            value: response.data.data.name,
                        },
                        {
                            label: "Tip",
                            value: response.data.data.isParent ? "Ana Kategori" : "Alt Kategori",
                        },
                        {
                            label: "Ana Kategori",
                            value: response.data.data.parentCategory ? response.data.data.parentCategory.name : "-",
                        },
                        {
                            label: "Slug",
                            value: response.data.data.slug,
                        },
                    ],
                }
                createdData.value = created;
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