import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/Create";
import Edit from "./components/Edit";
import Index from "./components/Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], results: [], query: "" };
  }

  onSearch = event => {
    this.setState({ query: event });

    let updateList = this.state.data;
    updateList = updateList.filter(item => {
      return (
        item.name.toLowerCase().search(this.state.query.toLowerCase()) !== -1
      );
    });

    this.setState({
      results: updateList
    });
  };

  receiveData = data => {
    this.setState({
      data: [...this.state.data, data]
    });
    // console.log(this.state.data);
  };
  onDelete = name => {
    // console.log(name);
    const filteredData = this.state.data.filter(data => {
      return data.name !== name;
    });
    this.setState({ data: filteredData });
  };

  onEdit = (newData, orgName) => {
    let updateData = this.state.data;
    updateData = updateData.map(data => {
      if (data.name === orgName) {
        data.name = newData.name;
        data.shop = newData.shop;
        data.status = newData.status;
      }

      return updateData;
    });

    this.setState({ updateData });
  };

  render() {
    const { data, results, query } = this.state;
    // console.log("res",this.state.results)
    var datas = results !== "" && !query ? data : results;

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-blue bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Records
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Create data={this.receiveData} />}
            />
            <Route
              path="/create"
              render={() => <Create data={this.receiveData} />}
            />
            <Route path="/edit" render={() => <Edit onEdit={this.onEdit} />} />
            <Route
              path="/index"
              render={() => (
                <Index
                  onSearch={this.onSearch}
                  onDelete={this.onDelete}
                  data={datas}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
