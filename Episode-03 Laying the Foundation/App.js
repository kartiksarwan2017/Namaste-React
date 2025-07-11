import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMML ELement(render to DOM)
// const heading = React.createElement("h1", { id:"heading" }, "Namaste React");       
// console.log(heading);


// JSX - is not HTML in JS
// React Element => Object
// const heading = (
//   <h1 className="heading" tabIndex="1">
//     Namaste React using JSX
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// React Functional Component

// const Title = () => (
//   <h1 className="heading" tabIndex="1">
//     Namaste React using JSX
//   </h1>
// );

// // const Title = function () {
// //   return (
// //     <h1 className="heading" tabIndex="1">
// //       Namaste React using JSX
// //     </h1>
// //   )
// // }

// // Component Composition
// const HeadingComponent = () => {  
//   return (
//     <div className="container">
//       <Title />
//       <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
//   );
// }

// // const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);




// const element = <span>React Element</span>
// const number = 10000;


// // Component Composition
// const HeadingComponent = () => {  
//   return (
//     <div className="container">
//       { title }
//       <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
//   );
// }

// const title =  (
//   <h1 className="heading" tabIndex="1">
//     {element}
//     Namaste React using JSX
//   </h1>
// );

// // const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);




const element = <span>React Element</span>
const number = 10000;

const Title = () => (
  <h1 className="heading" tabIndex="1">
    {element}
    Namaste React using JSX
  </h1>
);

// const data = api.getData();

// Component Composition
const HeadingComponent = () => {  
  return (
    <div className="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);