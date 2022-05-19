import { Component } from "react";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      age: "",
    };
  }

  sendStudent = () => {
    this.props.newStudentToAdd({
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div className="container-sm my-5">
        <div className="row border rounded-3 bg-success bg-gradient round">
          <div className="col-12 my-4 pt-4 align-self-stretch text-center input-group">
            <span className="input-group-text" id="inputGroup-sizing">
              Student ID
            </span>
            <input
              type="text"
              className="form-control"
              value={this.state.txt}
              onChange={(e) => {
                this.setState({ id: e.target.value });
              }}
            />
          </div>
          <div className="col-12 my-4 pt-4 align-self-stretch text-center input-group">
            <span className="input-group-text" id="inputGroup-sizing">
              Name
            </span>
            <input
              type="text"
              className="form-control"
              value={this.state.txt}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="col-12 my-4 align-self-stretch text-center input-group">
            <span className="input-group-text" id="inputGroup-sizing">
              Age
            </span>
            <input
              type="text"
              className="form-control"
              value={this.state.txt}
              onChange={(e) => {
                this.setState({ age: e.target.value });
              }}
            />
          </div>
          <div className="col-12 my-4 text-center">
            <input
              type="button"
              value="Add"
              onClick={this.sendStudent}
              className="btn bg-light bg-gradient


              "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;
