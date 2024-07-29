<script setup lang="ts">
import { ref } from 'vue'
import { vHighlight } from '@v-anything/directives/dev'

const text = ref()
text.value = '这是一段。。(简体中文)。。(aa文本。'.repeat(2)
</script>

<template>
  <p
    v-highlight="{
      keywords: ['中文', '这是', 'a'],
      options: {
        styleMap: {
          a: {
            color: 'purple',
          },
          中文: {
            color: 'white',
            backgroundColor: 'purple',
          },
          这是: {
            color: 'red',
          },
        },
      },
    }"
  >
    {{ text }}
  </p>
  <p
    v-highlight="{
      keywords: ['D', 'C', 'Data', 'Claim'],
      options: {
        styleMap: {
          D: {
            color: '#EF5A6F',
          },
          C: {
            color: '#399918',
          },
          Data: {
            // color: '#EF5A6F',
            color: 'red',
          },
          Claim: {
            color: '#399918',
          },
        },
      },
    }"
  >
    前提条件(Data)是支持论题(Claim)的证据或事实，是你用来证明论题的基础。例如你要证明"人们应该每天锻炼",那么你论证的前提可能是"锻炼有助于保持健康，减少患病的风险。"
  </p>
</template>
