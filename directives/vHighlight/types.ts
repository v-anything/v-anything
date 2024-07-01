export interface Binding {
  keywords: string[];
  rainbow?: boolean;
}

export interface IHighlightUtil {
  generateHighlights: (el: HTMLElement, binding: { value: Binding }) => void;
}

export interface ElementWithHighlighter extends HTMLElement {
  $highlighter?: IHighlightUtil;
}
