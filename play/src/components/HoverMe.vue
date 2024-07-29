<script setup lang="ts">
import { ref } from 'vue'
import { vHovertime } from '@v-anything/directives/dev'

const visibility = ref(true)
const hovertimeList = ref([])
const totalTime = ref(0)

function mouseLeaveCallback(time: number) {
  hovertimeList.value.push(time)
}

function unmountedCallback(time: number) {
  totalTime.value = time
}
</script>

<template>
  <div>
    <h1
      v-if="visibility"
      v-hovertime="{
        mouseLeaveCallback,
        unmountedCallback,
      }"
      class="hoverBlock"
    >
      Hover me plz!
    </h1>
    <span>{{ `${hovertimeList.join(' ms, ')} ms` }} {{ `total: ${totalTime}` }}</span>
  </div>
</template>

<style scoped>
.hoverBlock{
  width: fit-content;
  background-color: beige;
  &:hover{
   cursor: pointer;
   background-color: antiquewhite;
  }
}
</style>
