import React from "react";
import SearchResults from "../components/SearchResults";
import "../styleSheets/SearchWindow.css";
import Slider from "../components/DistanceSlider";
import "../styleSheets/Slider.css";

class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      sliderValue: 5,
      ready: false
    };
  }
  handleChange = event => {
    this.setState({ address: event.target.value });
    console.log(this.state.address);
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleClickFunction();
    }
  };
  handleSliderChange = event => {
    this.setState({ sliderValue: event });
    // console.log("event : ", event)
  };

  handleSetReady = event => {
    this.setState({ ready: event });
  };

  handleClickFunction = () => {
    //this.alertFunction(this.state.address);
    this.setState({ ready: true });
  };

  alertFunction(e) {
    // e.preventDefault();
    alert(e);
  }
  render() {
    return (
      <div>
        <div>
          <h1>The Virtual N.O.M</h1>
          <div>
            Enter your location:
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
              onKeyUp={this.handleKeyPress}
            ></input>
          </div>
          <div style={{ marginTop: 10 }}>Radius: {this.state.sliderValue}</div>
          <Slider handleSliderChange={this.handleSliderChange}></Slider>
          <button
            onClick={this.state.address ? this.handleClickFunction : null}
          >
            Search
          </button>
          <SearchResults
            location={this.state.address}
            ready={this.state.ready}
            handleSetReady={this.handleSetReady}
            sliderValue={this.state.sliderValue}
          />
        </div>
      </div>
    );
  }
}

export default SearchWindow;
