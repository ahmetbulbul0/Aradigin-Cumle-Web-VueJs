<template>
  <div class="out2ColumnsBox">
    <div class="in2ColumnsBox">
      <div class="mainBox">
        <div class="outNewsDetail">
          <div class="inNewsDetail">
            <div class="line">
              <span class="content"><b>{{ data.title }}</b></span>
            </div>
            <div class="line">
              <span class="content">{{ data.content }}</span>
            </div>
            <div class="line dateAuthor">
              <span class="writer">Yazar:<a href="">{{ data.author.username }} [{{ data.author.fullName }}]</a></span>
              <span class="date">{{ data.publishDate.distanceText }} | {{ data.publishDate.text }}</span>
            </div>
            <div class="line category">
              <span class="category">
                <a href="" class="onlyGradientBackground" v-if="data.category.parentCategory">
                  {{ data.category.parentCategory.name }}
                </a>
                <a href="" class="onlyGradientBackground">
                  {{ data.category.name }}
                </a>
              </span>
              <span class="category">
                <a href="" class="onlyGradientText">
                  Bu Kategorideki Diğer Haberler
                </a>
              </span>
            </div>
            <div class="line resource">
              <span class="resource">Kaynak:
                <a :href="data.resourcePlatform.mainUrl">{{
                    data.resourcePlatform.name
                }}</a></span>
              <span class="resource">
                <a :href="data.resourceUrl.url" target="blank">Kaynak Haber Linki</a>
              </span>
              <span class="resource">
                <router-link :to="{
                  name: 'NewsListResourcePlatform',
                  params: {
                    resourcePlatformSlug: data.resourcePlatform.slug,
                    listType: 'son-yayinlananlar',
                  },
                }">Bu Kaynak Haber Sitesine Ait Diğer Haberler</router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBar"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
const data = props.data;
</script>
