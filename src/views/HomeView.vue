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

var newsForSmallList1 = await getList("news", {
  limit: 5,
  sorting: "publishDate90",
});

var newsForSmallList2 = await getList("news", {
  limit: 5,
  sorting: "publishDate09",
});

var newsForMiddleList1 = await getList("news", {
  limit: 5,
  sorting: "titleZA",
});

var newsForMiddleList2 = await getList("news", {
  limit: 5,
  sorting: "titleAZ",
});

var newsForBigList = await getList("news", {
  limit: 5,
  sorting: "publishDate90",
});

const small2ListData = [
  {
    title: "Son Yayınlananlar",
    list: newsForSmallList1,
    allListLink: "son-yayinlananlar",
  },
  {
    title: "Çok Okunanlar",
    list: newsForSmallList2,
    allListLink: "cok-okunanlar",
  },
];

const middle2ListData = [
  {
    title: "Kategori1",
    list: newsForMiddleList1,
    allListLink: "kategori-1",
  },
  {
    title: "Kategori2",
    list: newsForMiddleList2,
    allListLink: "kategori-2",
  },
];

const bigListData = {
  title: "Son Yayınlananlar",
  list: newsForBigList.data,
  allListLink: "son-yayinlananlar",
  pagination: newsForBigList.pagination
};


</script>

