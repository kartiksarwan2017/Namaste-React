/* 

Creating Nested Elements in React
   <div id="parent">
        <div id="child">
           <h1>I'm and H1 tag</h1>
           <h2>I'm an H2 tag</h2>
        </div>
        <div id="child2">
           <h1>I'm and H1 tag</h1>
           <h2>I'm an H2 tag</h2>
        </div>
   <div>


   ReactElement(Object) => HTML(Browser Understands)

*/

const parent = React.createElement(
                    "div", 
                    { id : "parent"}, 
                    [   React.createElement(
                        "div", 
                        { id : "child"}, 
                        [React.createElement("h1",  { }, "I'm an H1 Tag"), React.createElement("h2",  { }, "I'm an H2 Tag")]
                        ),
                        React.createElement(
                            "div", 
                            { id : "child2"}, 
                            [React.createElement("h1",  { }, "I'm an H1 Tag"), React.createElement("h2",  { }, "I'm an H2 Tag")]
                        )
                    ]   
                );



// const heading = React.createElement(
//     "h1", 
//     { id: "heading", xyz: "abc" }, 
//     "Hello World from React!"
// );

// console.log(heading); // object


console.log(parent);  // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
  

// JSX IN REACT