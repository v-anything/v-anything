<script setup lang="ts">
import { ref } from 'vue'
import { vHovertime } from '@v-anything/directives'

const visibility = ref(true)
const hovertimeList = ref<number[]>([])
const totalTime = ref(0)

function mouseLeaveCallback(time: number) {
  hovertimeList.value.push(time)
}

function unmountedCallback(time: number) {
  totalTime.value = time
}

function unmount() {
  visibility.value = !visibility.value
  hovertimeList.value = []
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 4px">
    <h1
      v-if="visibility" v-hovertime="{
        mouseLeaveCallback,
        unmountedCallback,
      }" style="background: orange; padding: 10px"
    >
      Hover me plz!
    </h1>
    <button @click="unmount">
      unmount HelloWorld
    </button>
    <ul>
      <li v-for="(item, index) in hovertimeList" :key="index">
        {{ `duration ${index}: ${item} ms` }}
      </li>
    </ul>
    <div>total: {{ totalTime }} ms</div>
  </div>
</template>
