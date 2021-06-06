import { createApp } from "vue";
import App from "./App.vue";

// pwa
import { registerSW } from "virtual:pwa-register";
registerSW({ immediate: true });

const app = createApp(App);

// dynamic load modules
Object.values(import.meta.globEager("./modules/*.ts")).map((i) =>
  i.install?.(app)
);

app.mount("#app");
