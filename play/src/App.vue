<script setup lang="ts">
import { ref } from "vue";
import { vHovertime } from "@sudive/directives";
import HoverMe from "./components/HoverMe.vue";

const visibility = ref(true);

const hovertimeList = ref([]);
const totalTime = ref(0);

const mouseLeaveCallback = (time: number) => {
  hovertimeList.value.push(time);
};

const unmountedCallback = (time: number) => {
  totalTime.value = time;
};
</script>

<template>
  <HoverMe
    v-if="visibility"
    v-hovertime="{
      mouseLeaveCallback,
      unmountedCallback,
    }"
  ></HoverMe>
  <button @click="visibility = !visibility">unmount HelloWorld</button>
  <ul>
    <li v-for="(item, index) in hovertimeList" :key="index">
      {{ `duration ${index}: ${item} ms` }}
    </li>
  </ul>
  <div>total: {{ totalTime }} ms</div>
</template>
