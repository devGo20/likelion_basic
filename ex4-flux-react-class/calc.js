class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      result: 0
    };
  }

  handleXChange = e => {
    this.setState({ x: parseInt(e.target.value) || 0 });
  };

  handleYChange = e => {
    this.setState({ y: parseInt(e.target.value) || 0 });
  };

  clickSubmitHandler = e => {
    e.preventDefault();
    this.setState(prevState => ({
      result: prevState.x + prevState.y
    }));
  };

  render() {
    const { x, y, result } = this.state;
    return (
      <section id="calc-app">
        <h1>덧셈 계산기</h1>
        <form>
          <fieldset>
            <legend>계산기 입력폼</legend>
            <div>
              <label>x:</label>
              <input
                className="x-input"
                value={x}
                dir="rtl"
                onChange={this.handleXChange}
              />
              <label>y:</label>
              <input
                className="y-input"
                value={y}
                dir="rtl"
                onChange={this.handleYChange}
              />
              <span>=</span>
              <span className="result-span">
                {result}
              </span>
            </div>
            <hr />
            <div>
              <input type="submit" value="초기화" />
              <input
                onClick={this.clickSubmitHandler}
                type="submit"
                className="submit-input"
                value="계산하기"
              />
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}

ReactDOM.render(<Calc />, document.getElementById('root'));
