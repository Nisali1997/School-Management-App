import React from 'react';
import axios from "axios";

// import {FcCloseUpMode} from 'react-icons/fc';


class Students extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // id:"",
            // firstName: "",
            // lastName: "",
            // age: 0,
          };
    }

    
    componentWillMount() {
        axios.get("http://localhost:8087/students/").then((res) => {
          this.setState({
            exams: res.data,
            id: "",
            name: "",
          });
        });
      }

    render(){
        return(
        <div>
                <span>
                                Student List

                </span>
              <div className="container">
                <table className="table table-bordered tableClass">
                    <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        {/* <th scope="col">Contact No</th> */}
                        {/* <th scope="col">Instructors</th> */}
                    </tr>
                    </thead>

                    <tbody>
                     {/* {this.state.student.map((student) => (
                         <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.teacher}</td>
                            

                        </tr>
                    ))
                    } */}
                    </tbody>

          </table>
              </div>
        </div>
        )
    }
}

export default Students;