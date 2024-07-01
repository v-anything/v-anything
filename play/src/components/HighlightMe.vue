<script setup lang="ts">
import { vHighlight } from "@sudive/directives";
import "@sudive/directives/styles/highlight.css";
import { ref } from "vue";

const text = ref();
setTimeout(() => {
  text.value =
    "这是一段简体中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。";
}, 1000);
</script>

<template>
  <p v-highlight="{ keywords: ['中文', '长河', '落日'] }">
    😬🧑🏿‍✈️🧑🏿‍🍼🙇🏿🏌🏿‍♂️🏄🏿‍♀️🏄🏿‍♂️中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤
  </p>
  <p v-highlight="{ keywords: ['is', 'if', 'man'] }">This</p>
  <p v-highlight="{ keywords: ['is', 'if', 'man'] }">This</p>
  <p v-highlight="{ keywords: ['is', 'if', 'man'], rainbow: true }">
    This is an Enligsh text. No man is an island, Entire of itself, Every man is
    a piece of the continent, A part of the main. If a clod be washed away by
    the sea, Europe is the less. As well as if a promontory were. As well as if
    a manor of thy friend’s Or of thine own were: Any man’s death diminishes me,
    Because I am involved in mankind, And therefore never send to know for whom
    the bell tolls; It tolls for thee.
  </p>
</template>
