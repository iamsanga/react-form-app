import React, { Component } from "react";
import TableRow from "./TableRow";
import { withRouter } from "react-router-dom";

class Index extends Component {
  delete = name => {
    this.props.onDelete(name); //call back to main
  };
  search = e => {
    const event = e.target.value;
    this.props.onSearch(event);
  };
  tabRow = () => {
    return this.props.data.map((object, i) => {
      return <TableRow del={this.delete} obj={object} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search by name..."
          onChange={this.search}
          class="form-control"
        />
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Shop</th>
              <th>Status</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(Index);
