import { Component } from "react";

export default class FirstComponent extends Component {
  constructor() {
    super();
    this.state = {
      txt: "",
    };
  }

  resetText = () => {
    this.setState({ txt: "" });
  };

  render() {
    return (
      <div className="container-sm my-5">
        <div className="row border rounded-3 bg-light round">
          <div className="col-12 my-4 align-self-stretch text-center input-group">
            <span className="input-group-text" id="inputGroup-sizing">
              Type your text
            </span>
            <input
              type="text"
              className="form-control"
              value={this.state.txt}
              onChange={(e) => {
                this.setState({ txt: e.target.value });
              }}
            />
          </div>
          <div className="col-12 my-4 text-center">
            <h4>{this.state.txt}</h4>
          </div>
          <div className="col-12 my-4 text-center">
            <input
              type="button"
              value="Clear"
              onClick={this.resetText}
              className="btn btn-danger"
            />
          </div>
        </div>
      </div>
    );
  }
}
