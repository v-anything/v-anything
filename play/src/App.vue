<script setup lang="ts">
import { ref } from 'vue'
import HoverMe from './components/HoverMe.vue'
import HighlightMe from './components/HighlightMe.vue'
</script>

<template>
  <div class="container">
    <!-- <HoverMe /> -->
    <HighlightMe />
  </div>
</template>

<style scroped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

}
</style>
