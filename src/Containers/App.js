import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
      set: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChnage = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return robots.length === 0 ? (
      <h1>Loading ... </h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>

        <button
          className="ButtonLink"
          onClick={() => this.setState({ set: "set2" })}
        >
          Monster
        </button>
        <button
          className="ButtonLink"
          onClick={() => this.setState({ set: "set3" })}
        >
          Heads
        </button>
        <button
          className="ButtonLink"
          onClick={() => this.setState({ set: "set4" })}
        >
          kittens
        </button>
        <SearchBox SearchChnage={this.onSearchChnage} />
        <Scroll>
          <CardList robots={filteredRobots} set={this.state.set} />
        </Scroll>
      </div>
    );
  }
}
export default App;
