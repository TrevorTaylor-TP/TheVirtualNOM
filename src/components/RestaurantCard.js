import React from "react";
import "../styleSheets/RestaurantCard.css";
var json = [];
const MetersPerMiles = 1609.34;

export default function RestaurantCard(props) {
  // console.log("in Props card " + props.categories);
  var resObj = props.categories;
  // console.log("asdf1",resObj)
  for (var key in resObj) {
    json.push(resObj.title[key]);
    // console.log('json.title',resObj.title[key])
  }

  return (
    <div className="Rest_Card">
      <div className="Image_Holder">
        <img
          className="List_Image"
          src={props.children.image_url}
          alt="Boo!"
        ></img>
      </div>

      <div className="Content">
        <a href={props.children.url} target="_blank" rel="noopener noreferrer">
          <div>{props.children.name}</div>
        </a>
        <div>{props.children.price}</div>
        <div>
          {json.map((item, i) => {
            return <div>{item}</div>;
          })}
          <div>
            About{" "}
            {parseInt(props.children.distance / MetersPerMiles) <= 1.0
              ? 1 + " mile "
              : parseInt(props.children.distance / MetersPerMiles) +
                " miles "}{" "}
            away
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
}
