<template>
  <div class="outBigList">
    <div class="inBigList">
      <div class="outTitle">
        <span class="inTitle">
          <router-link :to="{ name: 'NewsList', params: { listType: data.allListLink } }">{{ data.title }}</router-link>
        </span>
      </div>
      <div class="bigList">
        <div class="item" v-if="data.list.length == 0">
          <div class="anyNewsText">
            <span> Hiç Haber Bulunamadı </span>
          </div>
        </div>
        <div class="item" v-for="item in data.list.data" :key="item.no">
          <div class="category">
            <router-link :to="{ name: 'NewsListCategory', params: { categorySlug: item.category.slug, listType: 'son-yayinlananlar' } }">{{ item.category.name }}</router-link>
          </div>
          <div class="content">
            <router-link :to="{ name: 'NewsDetail', params: {newsSlug: item.slug} }">{{ item.title }}</router-link>
          </div>
          <div class="date">
            <span>{{ item.publishDate }}</span>
          </div>
        </div>
      </div>
      <!-- <div class="outPaginate">
        <div class="inPaginate">
          <a href=""><i class="fas fa-arrow-left"></i></a>
          <span class="emptiess">...</span>
          <a class="number" href="">3</a>
          <a class="number" href="">4</a>
          <a class="number active" href="">5</a>
          <a class="number" href="">6</a>
          <a class="number" href="">7</a>
          <span class="emptiess">...</span>
          <a class="number" href=""><i class="fas fa-arrow-right"></i></a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["bigListData"]);

const data = props.bigListData;
</script>