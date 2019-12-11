import React from "react";
import SearchResults from "../components/SearchResults";
import "../styleSheets/SearchWindow.css";
import Slider from "../components/DistanceSlider";
import "../styleSheets/Slider.css";
import "../styleSheets/SearchWindow.css";
import { element } from "prop-types";
class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      sliderValue: 5,
      ready: false,
      //resetItem: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleChange = event => {
    this.setState({ address: event.target.value });
  };

  // handleRefresh = event => {
  //   let obj = event.target.id;
  //   console.log(`object to get refreshed: ${obj}`);
  //   obj.reset();
  // };

  handleSliderChange = event => {
    this.setState({ sliderValue: event });
    // console.log("event : ", event)
  };

  handleSetReady = event => {
    this.setState({ ready: event });
  };

  handleSubmit = event => {
    this.setState({
      ready: true,
      //resetItem: true,
    });
    event.preventDefault();
  };

  componentDidMount() {
    if (document.getElementById("search-bar") === null) {
      return "";
    } else {
      return document.getElementById("search-bar").value;
    }
  }

  render() {
    let content = this.componentDidMount();
    return (
      <div>
        <div>
          <h1>Welcome to The Virtual N.O.M!</h1>
          <form name="form1" onSubmit={this.handleSubmit}>
            <label>
              Enter your location:
              <input
                placeholder="Enter zip-code or address"
                id="search-bar"
                type="text"
                // value={this.state.address}
                // onChange={this.handleChange}
                // onReset={this.handleRefresh}
              ></input>
            </label>
            <div style={{ marginTop: 10 }}>
              Radius: {this.state.sliderValue}
            </div>
            <Slider handleSliderChange={this.handleSliderChange}></Slider>
            <input
              id="search-btn"
              type="submit"
              value="Click to Search"
            ></input>
          </form>
          <SearchResults
            location={content}
            ready={this.state.ready}
            handleSetReady={event => {
              this.setState({
                ready: event,
                address: "",
              });
            }}
            // onReset={this.resetItem ? this.handleRefresh : false}
            sliderValue={this.state.sliderValue}
          />
        </div>
      </div>
    );
  }
}

export default SearchWindow;
