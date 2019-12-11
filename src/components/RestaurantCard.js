import React from "react";
import "../styleSheets/RestaurantCard.css";
var json = [];
const MetersPerMiles = 1609.34;

export default function RestaurantCard(props) {
  console.log("props categories", props.cardData.categories);

  return (
    <div className="Rest_Card">
      <div className="Image_Holder">
        <img
          className="List_Image"
          src={props.cardData.image_url}
          alt="  Restaurant Food"
        ></img>
      </div>

      <div className="Content">
        <a href={props.cardData.url} target="_blank" rel="noopener noreferrer">
          <p id="name">{props.cardData.name}</p>
        </a>
        <p id="price">{props.cardData.price}</p>
        {/* <br></br> */}
        <div>
          {json.map((cardData, i) => {
            return <div>{cardData}</div>;
          })}
          <p id="distance">
            About{" "}
            {parseInt(props.cardData.distance / MetersPerMiles) <= 1.0
              ? 1 + " mile "
              : parseInt(props.cardData.distance / MetersPerMiles) +
                " miles "}{" "}
            away
          </p>
        </div>
      </div>
    </div>
  );
}
