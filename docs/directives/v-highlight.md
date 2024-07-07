# v-highlight

Highlight your text with [CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API).

> [!Warning] Tip
> **Firefox** has not supported this feature yet. (2024 July)

## Basic Usage

````Vue{7-15,20-25}
<script setup lang="ts">
import { vHighlight } from '@v-anything/directives'
</script>

<template>
  <p
    v-highlight="{
      keywords: ['is', 'text'],
      options: {
        styleMap: {
          is: { color: 'red' },
          text: { backgroundColor: yellow }
        }
      },
    }"
  >
    This is an English text.
  </p>
  <p
    v-highlight="{
      keywords:["中文"],
      options: {
        defaultDecoration: { textDecoration: 'underline' }
      }
    }"
  >
    这是一段中文文本。
  </p>
</template>
```
````

## Types

```typescript
type StyleValue = Partial<CSSStyleDeclaration>

interface Binding {
  keywords: string[]
  options?: {
    defaultDecoration?: StyleValue
    styleMap?: { [key: string]: StyleValue } // key: keyword
    toLowerCase?: boolean
  }
}
```
