import { Component } from "react";
import AddStudent from "./AddStudent";
import StudentsList from "./StudentsList";
import AllStudents from "./students.json";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allStudents: AllStudents.students,
    };
  }

  addStudent = (student) => {
    console.log(student);
    console.log(this.state.allStudents);
    let newStudentsList = this.state.allStudents.concat(student);
    this.setState({ allStudents: newStudentsList });
  };

  render() {
    return (
      <div>
        <AddStudent newStudentToAdd={this.addStudent} />
        <StudentsList allStudents={this.state.allStudents} />
      </div>
    );
  }
}

export default Home;
