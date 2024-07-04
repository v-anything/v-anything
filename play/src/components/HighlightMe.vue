<script setup lang="ts">
import { vHighlight } from "@v-anything/directives";
import { ref } from "vue";

const text = ref();
setTimeout(() => {
  text.value =
    "这是一段简体中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。";
}, 200);
</script>

<template>
  <p
    v-highlight="{
      keywords: ['中文', '长河', '落日'],
      options: {
        styleMap: {
          中文: {
            color: 'white',
            backgroundColor: 'purple',
          },
          长河: {
            color: 'blue',
            textDecoration: 'underline',
          },
          落日: {
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
      keywords: ['is', 'English', 'man'],
      options: {
        defaultDecoration: {
          color: 'red',
          backgroundColor: 'green',
        },
      },
    }"
  >
    This is an Enligsh text.
  </p>
</template>
