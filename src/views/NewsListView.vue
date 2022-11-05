<template>
  <BigList :bigListData="bigListData" />
</template>

<script setup>
import BigList from "../components/BigList.vue";
import { useRoute } from "vue-router";
import { getList } from "../api";
import { sortingGenerateByListType } from "../tools/SortingGenerator.js";
import { watch, watchEffect } from "@vue/runtime-core";

const route = useRoute();

const listType = route.params.listType;

var page = route.params.page ? route.params.page : 1;

const sorting = sortingGenerateByListType("news", listType);

var newsForBigList = await getList("news", {
  limit: 5,
  sorting: sorting,
  page: page,
});

const bigListData = {
  title: "Son Yayınlananlar",
  list: newsForBigList.data,
  allListLink: "son-yayinlananlar",
  pagination: newsForBigList.pagination,
};

// watch(() => route.params.page,
//   async (newPage) => {
//     console.log(newPage);
//   }
// );

watch(route.params.page, (newPage) => {
  console.log(newPage);
})
</script>
