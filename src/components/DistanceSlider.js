import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const min = 1;
const max = 25;
const step = 1;
const marks = {
  1: { label: `${min}` },
  25: { label: `${max}` }
};
class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5
    };
  }
  onSliderChange = value => {
    console.log(value);
    this.setState({
      value
    });
  };

  onAfterChange = value => {
    this.props.handleSliderChange(value);
    console.log(value); //eslint-disable-line
  };

  render() {
    return (
      <div className="sliderContainer">
        <Slider
          value={this.state.value}
          min={min}
          max={max}
          marks={marks}
          step={step}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
        />
      </div>
    );
  }
}

export default CustomizedSlider;
