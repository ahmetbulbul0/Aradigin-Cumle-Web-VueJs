<template>
  <div class="outBigList">
    <div class="inBigList">
      <div class="outTitle">
        <span class="inTitle">
          <router-link
            :to="{ name: 'NewsList', params: { listType: data.allListLink } }"
            >{{ data.title }}</router-link
          >
        </span>
      </div>
      <div class="bigList">
        <div class="item" v-if="list.length == 0">
          <div class="anyNewsText">
            <span> Hiç Haber Bulunamadı </span>
          </div>
        </div>
        <div class="item" v-for="item in list" :key="item.no">
          <div class="category">
            <router-link
              :to="{
                name: 'NewsListCategory',
                params: {
                  categorySlug: item.category.slug,
                  listType: 'son-yayinlananlar',
                },
              }"
              >{{ item.category.name }}</router-link
            >
          </div>
          <div class="content">
            <router-link
              :to="{ name: 'NewsDetail', params: { newsSlug: item.slug } }"
              >{{ item.title }}</router-link
            >
          </div>
          <div class="date">
            <span>{{ item.publishDate }}</span>
          </div>
        </div>
      </div>
      <Pagination :data="pagination" :link="data.allListLink" />
    </div>
  </div>
</template>

<script setup>
import Pagination from "./Pagination.vue";
const props = defineProps(["bigListData"]);

const data = props.bigListData;

const list = data.list;
const pagination = data.pagination;
</script>
