import { createApp } from 'vue'
import App from './App.vue'
import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('c99741ef7d6f07efca420fc69c94b440');
const app = createApp(App);
app.mount('#app');
