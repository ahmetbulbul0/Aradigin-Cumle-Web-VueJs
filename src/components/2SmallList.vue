<template>
  <div class="outSmall2ListOneBox">
    <div class="inSmall2ListOneBox">
      <SmallList :listData="list1Data" />
      <SmallList :listData="list2Data" />
    </div>
  </div>
</template>

<script setup>
import SmallList from "./SmallList.vue";

const props = defineProps(["small2ListData"]);

const small2ListData = props.small2ListData;

const list1Data = small2ListData[0];
const list2Data = small2ListData[1];
</script>


