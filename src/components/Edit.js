import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.history.location.state.name,
      shop: this.props.history.location.state.shop,
      status: this.props.history.location.state.status
    };
    // console.log(this.state);
  }
  onChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangeShop = e => {
    this.setState({
      shop: e.target.value
    });
  };
  onChangeStatus = e => {
    this.setState({
      status: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    var orgName = this.props.history.location.state.name;
    const newData = {
      name: this.state.name,
      shop: this.state.shop,
      status: this.state.status
    };
    this.props.onEdit(newData, orgName); //callback
    this.props.history.push("/index");
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Name </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Shop </label>
            <input
              type="text"
              className="form-control"
              value={this.state.shop}
              onChange={this.onChangeShop}
            />
          </div>
          <div className="form-group">
            <label>Status </label>
            <input
              type="text"
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
