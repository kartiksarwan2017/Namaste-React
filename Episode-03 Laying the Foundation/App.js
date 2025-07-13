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

// const element = <span>React Element</span>
// const number = 10000;

// const Title = () => (
//   <h1 className="heading" tabIndex="1">
//     {element}
//     Namaste React using JSX
//   </h1>
// );

// // const data = api.getData();

// // Component Composition
// const HeadingComponent = () => {  
//   return (
//     <div className="container">
//       {Title()}
//       <Title />
//       <Title></Title>
//       <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);



// Coding Assignment

const HeadingComponent = () => {
  return (
    <div className="heading-container">
      <div className="logo-container">
        <img src="https://img.freepik.com/premium-vector/creative-unique-pencil-art-logo-design-template_132230-556.jpg?w=2000" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" required />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="usericon-container">
        <img src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-5507.jpg" alt="admin-logo" />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);