import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
import zh from './lang/zh';
import en from './lang/en';
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages: {
    zh,
    en,
  }
})
export default i18n;
