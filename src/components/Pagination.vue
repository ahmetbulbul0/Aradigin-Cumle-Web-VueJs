<template>
    <div class="outPaginate">
        <div class="inPaginate">
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.previousPage } }" v-if="data.previousPage"><i class="fas fa-arrow-left"></i></router-link>
            <span class="emptiess" v-if="data.nowPage > 3">...</span>
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.previousPreviousPage } }" v-if="data.previousPreviousPage" class="number">{{ data.previousPreviousPage }}</router-link>
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.previousPage } }" v-if="data.previousPage" class="number">{{ data.previousPage }}</router-link>
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.nowPage } }" class="number active">{{ data.nowPage }}</router-link>
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.nextPage } }" v-if="data.nextPage" class="number">{{ data.nextPage }}</router-link>
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.nextNextPage } }" v-if="data.nextNextPage" class="number">{{ data.nextNextPage }}</router-link>
            <span class="emptiess" v-if="(data.nowPage + 2) < data.totalPageNumber">...</span>
            <router-link :to="{ name: 'NewsList', params: { listType: link, page: data.nextPage } }" v-if="data.nextPage"><i class="fas fa-arrow-right"></i></router-link>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(["data", "link"]);
    const data = props.data;
    const link = props.link;
</script>