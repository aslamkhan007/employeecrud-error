import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { AddDepModal } from "./AddDepModal";
import { Button, ButtonToolbar } from "react-bootstrap";

export default class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: [],
      showModal: false,
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  async refreshList() {
    await fetch("http://13.233.21.154/reactcrudapi/api/Department")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ department: result });
      });
  }
  addModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Table
          className="mt-4"
          striped
          bordered
          hover
          size=" sm"
          variant="dark"
        >
          <thead>
            <tr>
              <th>DepartmentId</th>
              <th>DepartmentName</th>
            </tr>
          </thead>

          {this.state.department ? (
            this.state.department.map((dep) => (
              <tr key={dep.DepartmentId}>
                <td>{dep.DepartmentId}</td>
                <td>{dep.DepartmentName}</td>
              </tr>
            ))
          ) : (
            <h1>Data Not Found</h1>
          )}
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ showModal: true })}
          >
            Add department
          </Button>
          <AddDepModal
            show={this.state.showModal}
            onHide={this.addModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }
}
