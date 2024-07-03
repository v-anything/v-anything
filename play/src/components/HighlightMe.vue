<script setup lang="ts">
import { vHighlight } from '@sudive/directives';
import { ref } from 'vue';

const text = ref();
setTimeout(() => {
  text.value =
    '这是一段简体中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。';
}, 1000);
</script>

<template>
  <p v-highlight="{ keywords: ['中文', '长河', '落日'] }">
    {{ text }}
  </p>
  <p v-highlight="{ keywords: ['is', 'if', 'man'] }">This</p>
  <p v-highlight="{ keywords: ['is', 'if', 'man'] }">This</p>
  <p
    v-highlight="{
      keywords: ['is', 'English', 'man'],
      options: {
        defaultDecoration: {
          color: 'red',
          'background-color': 'yellow'
        }
      }
    }"
  >
    This is an Enligsh text.
  </p>
</template>
