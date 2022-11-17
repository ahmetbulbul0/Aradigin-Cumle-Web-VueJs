<template>
  <div class="outList">
    <div class="outTitle">
      <span class="inTitle">
        <router-link :to="{ name: 'NewsList', params: { listType: data.allListLink } }">{{ data.title }}</router-link>
      </span>
    </div>
    <div class="inList">
      <div class="item" v-if="data.list.length == 0">
        <div class="anyNewsText">
          <span> Hiç Haber Bulunamadı </span>
        </div>
      </div>
      <div class="item" v-for="item in data.list.data" :key="item.no">
        <div class="content">
          <router-link :to="{ name: 'NewsDetail', params: { newsSlug: item.slug } }">{{ item.title }}</router-link>
        </div>
        <div class="date">
          <span>{{ item.publishDate }}</span>
        </div>
      </div>
      <div class="outMore" v-if="data.list.length != 0">
        <router-link :to="{ name: 'NewsList', params: { listType: data.allListLink } }">Tüm Listeyi Görüntüle
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["listData"]);

const data = props.listData;
</script>
