<template>
  <BigList :bigListData="bigListData" />
</template>

<script setup>
import BigList from "../components/BigList.vue";
import { useRoute } from "vue-router";
import { getRequest } from "../api";
import { sortingGenerateByListType } from "../tools/SortingGenerator.js";
import { watch, watchEffect } from "@vue/runtime-core";

const route = useRoute();

const listType = route.params.listType;

var page = route.params.page ? route.params.page : 1;

const sorting = sortingGenerateByListType("news", listType);

const bigListData = {
  title: "Son Yayınlananlar",
  list: await getNews({ limit: 10, sorting: sorting, page: page }),
  allListLink: "son-yayinlananlar",
};

async function getNews(params) {
  const news = await getRequest("public/news", { params: params });
  return news.data;
}
</script>
