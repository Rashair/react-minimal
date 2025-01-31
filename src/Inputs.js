/* eslint-disable no-console */
import React from "react";

const generateArray2 = (a = 1, b = 1) =>
  Array.from(new Array(b - a + 1), (x, i) => a + i);
const squareRoot = arr => arr.map(x => Math.sqrt(x).toFixed(3));

class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {
      array: []
    };

    this.a = 0;
    this.b = 0;
    this.wasArrayProcessed = false;
    this.renderCount = 1;
    this.changeValue = this.changeValue.bind(this);
    this.processArray = this.processArray.bind(this);

    this.timerStart();
  }

  componentDidMount() {
    this.timerEnd();
  }

  shouldComponentUpdate() {
    this.timerStart();
    return true;
  }

  componentDidUpdate() {
    this.timerEnd();
  }

  timerStart() {
    console.time("render_time");
  }

  timerEnd() {
    console.log(`render - ${this.renderCount} `);
    console.timeEnd("render_time");
    this.renderCount += 1;
  }

  changeValue(e) {
    if (e.target.id === "a") {
      this.a = Number(e.target.value);
    } else {
      this.b = Number(e.target.value);
    }
    console.log(`Value ${e.target.id} changed: ${e.target.value} `);

    if (this.b > this.a && this.a > 0) {
      this.wasArrayProcessed = false;
      this.setState({ array: generateArray2(this.a, this.b) });
    } else if (this.state.array.length > 0) {
      this.wasArrayProcessed = false;
      this.setState({ array: [] });
    }
  }

  processArray() {
    if (this.wasArrayProcessed === false) {
      this.wasArrayProcessed = true;
      this.setState(prevState => ({ array: squareRoot(prevState.array) }));
    }
  }

  render() {
    return (
      <div className="m-md-2">
        <section className="form-group row mb-md-4">
          <label className="col-1" htmlFor="a">
            a:
          </label>
          <input
            id="a"
            className="form-control col-3"
            type="number"
            onChange={this.changeValue}
          />
        </section>
        <section className="form-group row mb-md-4">
          <label className="col-1" htmlFor="b">
            b:
          </label>
          <input
            id="b"
            className="form-control col-3"
            type="number"
            onChange={this.changeValue}
          />
        </section>
        <section className="form-group row mb-md-4">
          <span className="col-1 pr-0">[a, b]:</span>
          <span className="col-6 pl-0">{this.state.array.join(", ")}</span>
        </section>
        <button
          type="button"
          className="btn btn-dark"
          onClick={this.processArray}
        >
          Process array
        </button>
      </div>
    );
  }
}

export default Inputs;
