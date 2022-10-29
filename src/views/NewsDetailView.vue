<template>
  <NewsDetail :data="newsData" />
</template>

<script setup>
import NewsDetail from "../components/NewsDetail.vue";
import { getShow } from "../api";
import { useRoute } from "vue-router";
const route = useRoute();
const newsSlug = route.params.newsSlug;

var newsData = await getShow("news", newsSlug);
newsData = await newsData.data;
</script>
