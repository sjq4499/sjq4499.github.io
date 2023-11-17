const { createApp, ref, reactive } = Vue;

createApp({
  setup() {
    // “ref”是用来存储值的响应式数据源。
    // 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
    // 但是在下一个示例中更改这个值的时候，我们就需要它了。
    const message = ref('Hello World!');
    const nowDate = ref(new Date().toISOString().slice(0, 10));
    const list = reactive([
      { title: '相', date: '2022-1-18' },
      { title: '相', date: '2023-10-10' },
      { title: '相', date: '2023-12-31' },
      { title: '相', date: '2024-3-3' },
    ]);
    return {
      message,
      computerDays,
      list,
      nowDate,
    };
  },
}).mount('#app');
