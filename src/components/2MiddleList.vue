<template>
  <div class="outMiddle2List">
    <div class="inMiddle2List">
      <MiddleList :listData="list1Data" />
      <MiddleList :listData="list2Data" />
    </div>
  </div>
</template>

<script setup>
import MiddleList from "./MiddleList.vue";

const props = defineProps(["middle2ListData"]);

const middle2ListData = props.middle2ListData;

const list1Data = middle2ListData[0];
const list2Data = middle2ListData[1];

</script>