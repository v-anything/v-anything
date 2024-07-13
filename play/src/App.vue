<script setup lang="ts">
import { ref } from 'vue'
import { vHovertime } from '@v-anything/directives'
import HoverMe from './components/HoverMe.vue'
import HighlightMe from './components/HighlightMe.vue'
import RightclickMe from './components/RightclickMe.vue'

// const visibility = ref(true)

// const hovertimeList = ref([])
// const totalTime = ref(0)

// function mouseLeaveCallback(time: number) {
//   hovertimeList.value.push(time)
// }

// function unmountedCallback(time: number) {
//   totalTime.value = time
// }
</script>

<template>
  <RightclickMe />
  <!-- <HoverMe
    v-if="visibility"
    v-hovertime="{
      mouseLeaveCallback,
      unmountedCallback,
    }"
  />
  <button @click="visibility = !visibility">
    unmount HelloWorld
  </button>
  <ul>
    <li v-for="(item, index) in hovertimeList" :key="index">
      {{ `duration ${index}: ${item} ms` }}
    </li>
  </ul>
  <div>total: {{ totalTime }} ms</div>
  <HighlightMe /> -->
</template>
