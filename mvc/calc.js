// 데이터에 집중(계산만 해라!), document는 내가 조작하겠다.
Vue.createApp({
  data() {
    return {
      x: 20,
      y: 30,
      result: 0
    };
  },
  methods: {
    submitHandler() {
      this.result = this.x + this.y;
    }
  }
}).mount("#calc-app");
// mount: 모델을 입혀주다, 연결, 꽂다
// const result = x + y;
