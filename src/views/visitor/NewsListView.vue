<template>
  <VisitorViewLayout>
    <template v-slot:realBody>
      <BigList :bigListData="bigListData" />
    </template>
  </VisitorViewLayout>
</template>

<script setup>
import VisitorViewLayout from "../layouts/VisitorViewLayout.vue";
import BigList from "../../components/visitor/BigList.vue";
import { useRoute } from "vue-router";
import { getRequest } from "../../api";
import { sortingGenerateByListType, titleGenerateByListType } from "../../tools/Generator.js";
const route = useRoute();

const listType = route.params.listType;
var page = route.params.page ? route.params.page : 1;
const title = titleGenerateByListType("news", listType);
const sorting = sortingGenerateByListType("news", listType);

const bigListData = {
  title: title,
  list: await getNews({ limit: 10, sorting: sorting, page: page }),
  allListLink: listType,
};

async function getNews(params) {
  const news = await getRequest("public/news", { params: params });
  return news.data;
}
</script>
