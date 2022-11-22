<template>
  <NewsDetail :data="newsData" />
</template>

<script setup>
import router from "../router";
import NewsDetail from "../components/NewsDetail.vue";
import { getRequest } from "../api";
import { useRoute } from "vue-router";
const route = useRoute();
const newsSlug = route.params.newsSlug;
var newsData = await getRequest(`public/news/${newsSlug}`);
if (newsData.data.status == 404) {
  router.push({ name: "error", params: { errorCode: 404 } });
};
newsData = newsData.data.data;
</script>
