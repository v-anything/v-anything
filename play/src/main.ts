import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { sum } from "@sudive/directives";

console.log(sum(1, 2));
createApp(App).mount("#app");
