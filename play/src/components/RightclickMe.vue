<!-- eslint-disable no-console -->
<script setup lang="ts">
import { vRightclick } from '@v-anything/directives'

const menuOptions = [
  { label: '123', onClick: () => console.log('123') },
  { label: '456', onClick: () => console.log('456') },

]
</script>

<template>
  <div v-rightclick="menuOptions" class="block">
    right click me
  </div>
</template>

<style scoped>
.block{
  width: 200px;
  height: 200px;
  background-color: bisque;
}
</style>
