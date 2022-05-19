import { Component } from "react";
import { NavLink } from "react-router-dom";

let StudentsList = ({ allStudents }) => {
  let renderAllStudents = () => {
    return allStudents.map((student) => {
      let uri = "/student/" + student.id + "/" + student.name;
      return (
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>
            <NavLink to={uri} value="Details" className="btn btn-primary">
              Details
            </NavLink>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container-sm my-5 p-2 border rounded-3 bg-light">
      <table className="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
        <thead className="thead-inverse|thead-default">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderAllStudents()}</tbody>
      </table>
    </div>
  );
};

export default StudentsList;
