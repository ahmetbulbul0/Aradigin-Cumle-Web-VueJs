<template>
  <Small2List :small2ListData="small2ListData" />
  <Middle2List :middle2ListData="middle2ListData" />
  <Middle2List :middle2ListData="middle2ListData" />
  <Middle2List :middle2ListData="middle2ListData" />
  <BigList :bigListData="bigListData" />
</template>

<script setup>
import Small2List from "../components/2SmallList.vue";
import Middle2List from "../components/2MiddleList.vue";
import BigList from "../components/BigList.vue";
import { getList } from "../api";

var news = await getList("news", "limit=5");
news = await news.data;

const small2ListData = [
  {
    title: "Son Yayınlananlar",
    list: news,
    allListLink: "son-yayinlananlar"
  },
  {
    title: "Çok Okunanlar",
    list: news,
    allListLink: "cok-okunanlar"
  },
];

const middle2ListData = [
  {
    title: "Kategori1",
    list: news,
    allListLink: "kategori-1"
  },
  {
    title: "Kategori2",
    list: news,
    allListLink: "kategori-2"
  },
];

var allNews = await getList("news");
allNews = await allNews.data;

const bigListData = {
  title: "Kategori1",
  list: allNews,
  allListLink: "kategori-1"
};

</script>
