import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "./Details";


const Students = () => {

    const [students] = useContext(store);

    return(
        <div>
            <div className="student-header">
                <h1>Student Details..</h1>
                <Link className="add-studt" to='/add-student'>Add New Student</Link>
            </div>
            <table className="table table-bordered border-primary">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Course</th>
                      <th scope="col">Batch</th>
                      <th>Change</th>
                    </tr> 
                  </thead>
                  <tbody>

                    {
                        students.map((students) => (
                            <tr key={students.id}>

                                <td>{students.Name}</td>
                                <td>{students.Age}</td>
                                <td>{students.Course}</td>
                                <td>{students.Batch}</td>
                                <td> <Link to='/Edit-student'>Edit</Link> </td>

                            </tr>
                        ))
                    }
                    
                  </tbody>
            </table>
        </div>
    );
}

export default Students;