---
outline: deep
---

# v-hovertime

Collect **each duration** or **total time** users spend on hovering a element.

## Basic Usage

```vue{15-18}
<script setup lang="ts">
import { vHovertime } from '@v-anything/directives'

const mouseLeaveCallback = (hovertime: number) => {
  console.log(hovertime)
};

const unmountedCallback = (total: number) => {
  console.log(total)
};
</script>

<template>
  <button
    v-hovertime="{
      mouseLeaveCallback,
      unmountedCallback,
    }"
  >try to hoverme</button>
</template>
```

## Types

```typescript
interface Binding {
  mouseLeaveCallback?: (time: number) => void
  unmountedCallback?: (time: number) => void
}
```
