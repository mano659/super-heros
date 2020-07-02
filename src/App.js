import React, { Component } from "react";
import "./App.css";
import CardList from "./component/card-list/card-list";
import SearchBox from "./component/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    const { users, searchQuery } = this.state;
    console.log(users);
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );

    return (
      <div className="App">
        <h1>Super Heros</h1>
        <SearchBox
          placeholder="Search Heros"
          changeHandler={(e) => this.setState({ searchQuery: e.target.value })}
        ></SearchBox>
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
