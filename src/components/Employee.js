import React, { Component } from 'react'
import {Table} from 'react-bootstrap' 

export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
          employee: [],
        };
      }
    componentDidMount(){
        this.refreshList();
    }
     async refreshList() {
       await fetch("http://13.233.21.154/reactcrudapi/api/Employee")
          .then((res) => res.json())
          .then((result) => {
            this.setState({ employee: result });
          });
      }
    
      render() {
        return (
          <div>
            <Table className=  "mt-4" striped bordered hover size=" sm" variant="dark">
              <thead>
                <tr>
                <th>EmployeeID</th>
                <th>EmployeeName</th>
                <th>Department</th>
                <th>MAilId</th>
                <th>Doj</th>
                </tr>
              </thead>
    
                {this.state.employee ? (
                  this.state.employee.map((emp) => (
                    <tr key={emp.EmployeeID}>
                      <td>{emp.EmployeeID}</td>
                      <td>{emp.Department}</td>
                      <td>{emp.MAilId}</td>
                      <td>{emp.Doj}</td>
                    </tr>
                  ))
                ) : (
                  <h1>Data Not Found</h1>
                )}
            
            </Table>
          </div>
        );
      }
    
}
