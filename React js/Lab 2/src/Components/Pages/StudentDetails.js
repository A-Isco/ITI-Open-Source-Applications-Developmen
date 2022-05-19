import { useParams } from "react-router-dom";

let StudentDetails = () => {
  let { id, name } = useParams();

  return (
    <div className="container-sm bg-light my-5 p-5">
      <h3 className=" text-success text-center mb-4 ">Hello {name}</h3>
      <h3 className=" text-success text-center mb-4 ">Your ID is {id}</h3>
      <p className="text-primary text-center" style={{ fontSize: "50px" }}>
        Hala Madrid
      </p>
    </div>
  );
};

export default StudentDetails;
