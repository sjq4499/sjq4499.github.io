const { createApp, ref, reactive } = Vue;

createApp({
  setup() {
    // “ref”是用来存储值的响应式数据源。
    // 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
    // 但是在下一个示例中更改这个值的时候，我们就需要它了。
    const message = ref('记时本');
    const nowDate = ref(new Date().toISOString().slice(0, 10));
    let list = reactive([
      { title: '相遇', date: '2022-1-18' },
      { title: '相处', date: '2023-10-10' },
      { title: '相恋', date: '2023-12-31' },
    ]);
    let importanceList = reactive([
      { title: '元旦', date: '2024-1-1' },
      { title: '21岁', date: '2024-3-3' },
    ]);
    if (getQueryString('type') * 1 !== 1) {
      console.log(list);
      list = importanceList;
    }
    return {
      message,
      computerDays,
      list,
      nowDate,
      importanceList,
    };
  },
}).mount('#app');
