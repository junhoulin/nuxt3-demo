import { Collapse, Dropdown, Modal } from "bootstrap";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      bootstrap: {
        Collapse,
        Dropdown,
        Modal,
      },
    },
  };
});
