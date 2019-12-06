import React from "react";
import RestaurantCard from "../components/RestaurantCard";

import "../styleSheets/SearchResults.css";

var json = [];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = { apiResponse: "" };
  }

  callAPI(location, radius) {
    radius *= 1600;
    let offset = 0;
    let limit = 50;
    let sort_by = "distance";
    const queryString =
      "https://vnom-api-production.herokuapp.com/search/?location=" +
      location +
      "&limit=" +
      limit +
      "&offset=" +
      offset +
      "&radius=" +
      radius +
      "&sort_by=" +
      sort_by;
    const testString =
      "http://localhost:9000/search/?location=" +
      location +
      "&limit=" +
      limit +
      "&offset=" +
      offset +
      "&radius=" +
      radius +
      "&sort_by=" +
      sort_by;
    console.log("testString", testString);
    console.log("queryString", queryString);
    console.log(`radius ${radius}`);
    // fetch("https://vnom-api-production.herokuapp.com/search/") //for testing from heroku
    // fetch("http://localhost:9000/search") //for local testing
    fetch(testString)
      // .then(res => res.json())
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidUpdate() {
    // console.log("in mount", this.props.ready)
    if (this.props.ready) {
      this.callAPI(this.props.location, this.props.sliderValue);
      this.props.handleSetReady(false);
    }
  }

  render() {
    var resObj = this.state.apiResponse.slice();
    //console.log("asdf2", resObj);
    for (var key in resObj) {
      json.push(resObj[key]);
    }

    return (
      <div className="resultContainer">
        <ul>
          {json.map((item, i) => {
            return (
              <li key={i}>
                {/* <RestaurantCard>{item.name}</RestaurantCard> */}
                <RestaurantCard>{item}</RestaurantCard>
              </li>
            );
          })}
          {/* <RestaurantCard>{json}</RestaurantCard> */}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
