import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      shop: "",
      status: ""
    };
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
    const obj = {
      name: this.state.name,
      shop: this.state.shop,
      status: this.state.status
    };
    this.props.data(obj); //callback
    this.setState({
      name: "",
      shop: "",
      status: ""
    });
  };

  render() {
    // console.log(this.props.history.location)
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Details</h3>
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
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary"
              disabled={
                this.state.name && this.state.shop && this.state.status !== ""
                  ? false
                  : true
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);
