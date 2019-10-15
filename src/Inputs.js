import React from "react";

class Inputs extends React.Component {
  changeValue(e) {
    // eslint-disable-next-line no-console
    console.log(`Value ${e.target.name} changed: ${e.target.value}`);
  }

  render() {
    return (
      <div>
        a: <input name="a" type="number" onChange={this.changeValue} /> <br />
        b: <input name="b" type="number" onChange={this.changeValue} />
      </div>
    );
  }
}

export default Inputs;
