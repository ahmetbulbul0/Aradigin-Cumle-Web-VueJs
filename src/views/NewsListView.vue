<template>
  <BigList :bigListData="bigListData" />
</template>

<script setup>
import BigList from "../components/BigList.vue";
import { useRoute } from 'vue-router';
import { getList } from "../api";
import { sortingGenerateByListType } from "../tools/SortingGenerator.js"

const route = useRoute();
const routeParams = route.params;

const listType = routeParams.listType;

const page = routeParams.page ? routeParams.page : 1;

const sorting = sortingGenerateByListType("news", listType);

var newsForBigList = await getList("news", {
  limit: 5,
  sorting: sorting,
  page: page
});

const bigListData = {
  title: "Son Yayınlananlar",
  list: newsForBigList.data,
  allListLink: "son-yayinlananlar",
  pagination: newsForBigList.pagination
};

</script>
