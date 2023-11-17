const { createApp, ref, reactive } = Vue;

createApp({
  setup() {
    // “ref”是用来存储值的响应式数据源。
    // 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
    // 但是在下一个示例中更改这个值的时候，我们就需要它了。
    const message = ref('欢迎');
    const nowDate = ref(new Date().toISOString().slice(0, 10));
    const list = reactive([
      {
        title: '圣诞节',
        url: 'https://sjq4499.github.io/view/christmas/index.html',
      },
      {
        title: '背景版',
        url: 'https://sjq4499.github.io/view/lovebg/index.html',
      },
      { title: '工作介绍', url: 'https://sjq4499.github.io/jobIntroduction' },
      {
        title: '惠惠宝贝',
        url: 'https://sjq4499.github.io/web-vue2/#/love?name=%E6%83%A0%E6%83%A0%E5%AE%9D%E8%B4%9D',
      },
      {
        title: '惠惠宝贝',
        url: 'https://sjq4499.github.io/vite-vue3/#/xiaoyi1',
      },
      {
        title: '惠惠宝贝',
        url: 'https://sjq4499.github.io/vite-vue3/#/swiper',
      },
      {
        title: '倒计时',
        url: 'https://sjq4499.github.io/view/time/index.html',
      },
    ]);
    return {
      message,
      computerDays,
      list,
      nowDate,
    };
  },
}).mount('#app');
