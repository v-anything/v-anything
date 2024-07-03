import { StyleValue } from "vue";

export interface Binding {
  keywords: string[];
  options?: {
    defaultDecoration?: StyleValue,
    styleMap?: { [key: string]: StyleValue };
  }
}

export interface IHighlightUtil {
  generateHighlights: (el: HTMLElement, binding: { value: Binding }) => void;
  unmount: () => void
}

export interface ElementWithHighlighter extends HTMLElement {
  $highlighter?: IHighlightUtil;
}
