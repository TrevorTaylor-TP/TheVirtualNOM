import React from "react";
import SearchResults from "../components/SearchResults";
import "../styleSheets/SearchWindow.css";
import Slider from "../components/DistanceSlider";
import "../styleSheets/Slider.css";
import "../styleSheets/SearchWindow.css";
class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      sliderValue: 5,
      ready: false,
    };
  }
  handleChange = event => {
    this.setState({ address: event.target.value });
  };

  // handleKeyPress = event => {
  //   if (event.key === "Enter") {
  //     this.setState({ ready: true });
  //   }
  // };

  handleSliderChange = event => {
    this.setState({ sliderValue: event });
    // console.log("event : ", event)
  };

  // handleSetReady = event => {
  //   this.setState({ ready: event });
  // };

  handleClickFunction = () => {
    this.setState({ ready: true });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Welcome to The Virtual N.O.M!</h1>
          <label>
            Enter your location:
            <input
              placeholder="Enter zip-code or address"
              id="search-bar"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
              onKeyUp={event => {
                if (event.key === "Enter") {
                  this.setState({ ready: true });
                }
              }}
            ></input>
          </label>
          <div style={{ marginTop: 10 }}>Radius: {this.state.sliderValue}</div>
          <Slider handleSliderChange={this.handleSliderChange}></Slider>
          <button
            type="button"
            onClick={this.state.address ? this.handleClickFunction : null}
          >
            Search
          </button>
          <SearchResults
            location={this.state.address}
            ready={this.state.ready}
            handleSetReady={event => {
              this.setState({ ready: event });
            }}
            sliderValue={this.state.sliderValue}
          />
        </div>
      </div>
    );
  }
}

export default SearchWindow;
