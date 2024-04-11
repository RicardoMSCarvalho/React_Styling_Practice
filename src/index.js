//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
'use script'
const time = new Date();
const hour = time.getHours();
let msgDynamic;
const customStyle={
    color:"",
}

if (hour >= 0 && hour <= 12) {
  msgDynamic = "Good Morning";
  customStyle.color = "red";
} else if (hour >= 13 && hour < 18) {
  msgDynamic = "Good Afternoon";
  customStyle.color = "green";
} else {
  msgDynamic = "Good Evening";
  customStyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>{msgDynamic}</h1>
  </div>,
  document.getElementById("root")
);
