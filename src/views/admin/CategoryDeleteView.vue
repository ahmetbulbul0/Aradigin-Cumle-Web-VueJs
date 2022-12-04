<template>
    <AdminPopupViewLayout>
        <template v-slot:realBody>
            <DeleteConfirm :data="deleteConfirmData" @deleteConfirm="deleteConfirm" />
        </template>
    </AdminPopupViewLayout>
</template>

<script setup>
import AdminPopupViewLayout from '../layouts/AdminPopupViewLayout.vue';
import DeleteConfirm from '../../components/admin/DeleteConfirm.vue';
import router from '../../router';
import { useRoute } from "vue-router";
import { deleteRequest, getRequest } from '../../api';
import store from '../../store';
const route = useRoute();
const slug = route.params.categorySlug;
const data = await getRequest(`categories/${slug}`, { token: store.state.token });
const deleteConfirmData = {
    name: "Kategori",
    text: "kategori'yi",
    columns: [
        {
            label: "Ad",
            value: data.data.data.name
        },
        {
            label: "Slug",
            value: data.data.data.slug
        },
        {
            label: "Tip",
            value: data.data.data.isParent ? "Ana Kategori" : "Alt Kategori"
        },
        {
            label: "Ana Kategori",
            value: data.data.data.isChildren == true ? data.data.data.parentCategory.name : "-"
        },
    ]
}
async function deleteConfirm(result) {
    switch (result) {
        case "ok":
            await deleteRequest(`categories/${slug}`, { token: store.state.token });
            router.push({ name: "Categories" });
            break;
        case "cancel":
            router.push({ name: "Categories" });
            break;
        default:
            break;
    }
}
</script>