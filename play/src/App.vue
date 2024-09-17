<script setup lang="ts">
import { shallowRef } from 'vue'

import HoverMe from './components/HoverMe.vue'
import HighlightMe from './components/HighlightMe.vue'
import SelectMe from './components/SelectMe.vue'
import RightclickMe from './components/RightclickMe.vue'

const comp = shallowRef(HighlightMe)

const directiveOptions = [
  { label: 'HoverMe', component: HoverMe },
  { label: 'SelectMe', component: SelectMe },
  { label: 'HighlightMe', component: HighlightMe },
  { label: 'RightclickMe', component: RightclickMe },
]
</script>

<template>
  <select v-model="comp">
    <option v-for="item in directiveOptions" :key="item.label" :value="item.component">
      {{ item.label }}
    </option>
  </select>
  <div class="container">
    <component :is="comp" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
