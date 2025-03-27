ReactDOM.render(
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
  </section>,
  document.getElementById('root')
);
