<script setup>
import { vWatermark } from '@v-anything/directives/dev'
</script>

<template>
  <div v-watermark="{ text: 'WatermarkMe' }" class="watermark">
    WatermarkMe
  </div>
</template>

<style scoped>
.watermark {
  position: relative;
}
</style>
