import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class TableRow extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleEdit = data => {
    this.props.history.push("/edit", {
      ...data
    });
  };
  delete = () => {
    this.props.del(this.props.obj.name);
  };
  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.shop}</td>
        <td>{this.props.obj.status}</td>
        <td>
          <button
            onClick={e => {
              this.handleEdit(this.props.obj);
            }}
            className="btn btn-primary"
          >
            Edit
          </button>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default withRouter(TableRow);
