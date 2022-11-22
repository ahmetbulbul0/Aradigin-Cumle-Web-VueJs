<template>
  <NewsDetail :data="newsData" />
</template>

<script setup>
import NewsDetail from "../components/NewsDetail.vue";
import { getRequest } from "../api";
import { useRoute } from "vue-router";
const route = useRoute();
const newsSlug = route.params.newsSlug;
var newsData = await getRequest(`public/news/${newsSlug}`);
newsData = newsData.data.data;
</script>
