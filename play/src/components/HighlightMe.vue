<script setup lang="ts">
import { vHighlight } from "@v-anything/directives";
import { ref } from "vue";

const text = ref();
text.value =
  "这是一段简体中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。".repeat(
    1
  );
// setTimeout(() => {
//   text.value =
//     "这是一段简体中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。".repeat(
//       100
//     );
// }, 0);
const show = ref(true);
setTimeout(() => {
  show.value = false;
}, 2000);
</script>

<template>
  <p
    v-if="show"
    v-highlight="{
      keywords: ['长河', '落日', '这是'],
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
            color: 'green',
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
      keywords: ['is', 'English', 'man'],
      options: {
        defaultDecoration: {
          color: 'yellow',
          backgroundColor: 'black',
        },
      },
    }"
  >
    This 🏄🏿‍♀️is an Enligsh is is text1 isiss.
  </p>
  <div
    v-highlight="{
      keywords: ['01', '89'],
      options: {
        defaultDecoration: {
          color: 'red',
          backgroundColor: 'yellow',
        },
      },
    }"
  >
    0123456789
  </div>
</template>
