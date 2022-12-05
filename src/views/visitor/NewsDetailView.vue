<template>
  <VisitorViewLayout>
    <template v-slot:realBody>
      <NewsDetail :data="newsData" />
    </template>
  </VisitorViewLayout>
</template>

<script setup>
import VisitorViewLayout from "../layouts/VisitorViewLayout.vue";
import { defineAsyncComponent } from "@vue/runtime-core";
import router from "../../router";
import { getRequest } from "../../api";
import { useRoute } from "vue-router";
const NewsDetail = defineAsyncComponent((newsData) =>
    import("../../components/visitor/NewsDetail.vue")
);
const route = useRoute();
const newsSlug = route.params.newsSlug;
var newsData = await getRequest(`public/news/${newsSlug}`);
if (newsData.data.status == 404) {
  router.push({ name: "Error", params: { errorCode: 404 } });
};
newsData = newsData.data.data;
</script>
