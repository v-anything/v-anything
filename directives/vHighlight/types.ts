export type StyleValue = Partial<CSSStyleDeclaration>;

export interface Binding {
  keywords: string[];
  options?: {
    defaultDecoration?: StyleValue;
    styleMap?: { [key: string]: StyleValue }; // key: keyword
    toLowerCase?: boolean;
  };
}

export interface IHighlightUtil {
  generateHighlights: (el: HTMLElement, binding: { value: Binding }) => void;
  unmount: () => void;
}

export interface ElementWithHighlighter extends HTMLElement {
  $highlighter?: IHighlightUtil;
}
