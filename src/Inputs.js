/* eslint-disable no-console */
import React from "react";

const generateArray = (a = 1, b = 1) => {
  return Array.from(new Array(b - a + 1), (x, i) => a + i);
};

class Inputs extends React.Component {
  constructor() {
    super();
    this.state = { a: 0, b: 0, array: [] };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    let valA = this.state.a;
    let valB = this.state.b;
    if (e.target.id === "a") {
      valA = Number(e.target.value);
    } else {
      valB = Number(e.target.value);
    }
    console.log(`Value ${e.target.id} changed: ${e.target.value} `);

    if (valB > valA && valA > 0) {
      this.setState({ a: valA, b: valB, array: generateArray(valA, valB) });
    } else {
      this.setState({ a: valA, b: valB, array: [] });
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
      </div>
    );
  }
}

export default Inputs;
