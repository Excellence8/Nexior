import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "zh-CN",
  messages: {}
});

export function getLocale(lang) {
  return "zh-CN";
}

export default i18n;
