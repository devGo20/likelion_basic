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
  },
  template: `
  <section id="calc-app">
      <h1>덧셈 계산기</h1>
      <form>
        <fieldset>
          <legend>계산기 입력폼</legend>
          <div>
            <label>x:</label>
            <input class="x-input" dir="rtl" />
            <label>y:</label>
            <input class="y-input" dir="rtl" />
            <span>=</span>
            <span class="result-span">0</span>
          </div>
          <hr />
          <div>
            <input type="submit" value="초기화" />
            <input type="submit" class="submit-input" value="계산하기" />
          </div>
        </fieldset>
      </form>
    </section>`
}).mount('#calc-app');
// mount: 모델을 입혀주다, 연결, 꽂다
// const result = x + y;
