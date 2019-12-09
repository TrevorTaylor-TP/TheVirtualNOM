import React from 'react';

 function listItem(props) {      
    const rList = props.map((item, index) => {
      console.log("rlist: " + JSON.stringify(rList));
      // return <RestaurantCard>{item.name}</RestaurantCard>;
      return (<li key = {index}>
        <p>{item.name}</p>
      </li>
      )
    });
    return <ul>{rList}</ul>
  }
  export default listItem;