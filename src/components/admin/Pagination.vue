<template>
    <div class="outPaginate">
        <div class="inPaginate">
            <a v-if="paginate.previousPage"><i class="fas fa-arrow-left"></i></a>
            <!-- <span class="empties">...</span> -->
            <a v-if="paginate.previousPreviousPage" class="number">{{ paginate.previousPreviousPage }}</a>
            <a v-if="paginate.previousPage" class="number">{{ paginate.previousPage }}</a>
            <a class="number active">{{ paginate.nowPage }}</a>
            <a v-if="paginate.nextPage" class="number">{{ paginate.nextPage }}</a>
            <a v-if="paginate.nextNextPage" class="number">{{ paginate.nextNextPage }}</a>
            <!-- <span class="empties">...</span> -->
            <a v-if="paginate.nextPage" class="number"><i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(["paginate"]);

</script>