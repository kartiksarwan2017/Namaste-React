import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
                    "div", 
                    { id : "parent"}, 
                    [   React.createElement(
                        "div", 
                        { id : "child"}, 
                        [React.createElement("h1",  { }, "This is Namaste React"), React.createElement("h2",  { }, "I'm an H2 Tag")]
                        ),
                        React.createElement(
                            "div", 
                            { id : "child2"}, 
                            [React.createElement("h1",  { }, "I'm an H1 Tag"), React.createElement("h2",  { }, "I'm an H2 Tag")]
                        )
                    ]   
                );


console.log(parent);  // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
  