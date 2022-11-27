<template>
    <div class="outDbList">
        <div class="inDbList">
            <div class="outTitle">
                <div class="inTitle">
                    Kategoriler
                </div>
                <div class="titleSelects">
                    <div class="actions">
                        <router-link :to="{ name: 'NewCategory' }">Yeni Kategori Oluştur</router-link>
                    </div>
                    <div class="listingTypeSelect">
                        <form method="POST" class="outSelectBox">
                            <select name="listingType" onchange="if(this.value != 0) { this.form.submit(); }">
                                <option value="default" selected>Varsayılan</option>
                                <option value="no09">Numerik Kolon (0 - 9)</option>
                                <option value="no90">Numerik Kolon (9 - 0)</option>
                                <option value="nameAZ">Metinsel Kolon (A - Z)</option>
                                <option value="nameZA">Metinsel Kolon (Z - A)</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
            <div class="dbList">
                <div class="titleLine">
                    <div class="w20">
                        <span>Adı</span>
                    </div>
                    <div class="w20">
                        <span>Tip</span>
                    </div>
                    <div class="w20">
                        <span>Ana Kategori</span>
                    </div>
                    <div class="w20">
                        <span>Slug</span>
                    </div>
                    <div class="w20">
                        <span>İşlem</span>
                    </div>
                </div>
                <div class="line" v-for="item in data" :key="item.no">
                    <div class="w20">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="w20">
                        <span>{{ item.isParent ? "Ana Kategori" : "Alt Kategori" }}</span>
                    </div>
                    <div class="w20">
                        <span>{{ item.isChildren ? item.parentCategory.name : "-" }}</span>
                    </div>
                    <div class="w20">
                        <span>{{ item.slug }}</span>
                    </div>
                    <div class="actions w20">
                        <span>
                            <a href="#">
                                <i class="fas fa-trash"></i>
                            </a>
                            <a href="#">
                                <i class="fas fa-edit"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <Pagination :paginate="paginate" />
        </div>
    </div>
</template>

<script setup>
import Pagination from './Pagination.vue';
const props = defineProps(["data"]);

const data = props.data.data.data;
const paginate = props.data.data.pagination;

</script>