<template>
  <div>
    <Small2List :small2ListData="small2ListData" />
    <Middle2List :middle2ListData="middle2ListData" />
    <Middle2List :middle2ListData="middle2ListData" />
    <Middle2List :middle2ListData="middle2ListData" />
    <BigList :bigListData="bigListData" />
  </div>
</template>

<script setup>
import Small2List from "../components/2SmallList.vue";
import Middle2List from "../components/2MiddleList.vue";
import BigList from "../components/BigList.vue";
import { getRequest } from "../api";


const small2ListData = [
  {
    title: "Son Yayınlananlar",
    list: await getNews({ limit: 5 }),
    allListLink: "son-yayinlananlar",
  },
  {
    title: "Son Yayınlananlar",
    list: await getNews({ limit: 5 }),
    allListLink: "son-yayinlananlar",
  }
];

const middle2ListData = [
  {
    title: "Kategori1",
    list: await getNews({ limit: 5 }),
    allListLink: "kategori-1",
  },
  {
    title: "Kategori2",
    list: await getNews({ limit: 5 }),
    allListLink: "kategori-2",
  },
];

const bigListData = {
  title: "Son Yayınlananlar",
  list: await getNews({ limit: 10 }),
  allListLink: "son-yayinlananlar",
};

async function getNews(params) {
  const news = await getRequest("public/news", { params: params });
  return news.data;
}

</script>
