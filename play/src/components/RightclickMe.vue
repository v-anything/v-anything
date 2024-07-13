<script setup lang="ts">
import { ref } from 'vue'
import { vRightclick } from '@v-anything/directives/dev'

const menus = ref([
  {
    name: 'menu 1',
    onClick: () => {
      console.log(1)
    },
  },
])
</script>

<template>
  <p v-rightclick="menus">
    11
  </p>
</template>

<style>
p {
  width: 300px;
  height: 300px;
  background-color: bisque;
}
</style>
