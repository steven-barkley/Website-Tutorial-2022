import React from 'react'
// Need to inject component functions Greetings into the index.html root need to use//
import ReactDOM from 'react-dom'
// ReactDom uses a renderMethod ... used at end of file

// We can create functions however we like function() or arrow function => *//
// Stateless functional component
// JSX Rules
// div / Section / article or Fragment
// use camelCase for html attribute
// className instead of class
// Closs every element
// formatting


// function Greeting() {
//   return (
//     <div onClick>
//       <h1>Passing JSX into the root UI.</h1>
//       <ul>
//         <li href='#'>formatting</li>
//         <li href='#'>use camelCase for html attribute</li>
//         <li href='#'>div / Section / article or Fragment</li>
//         <li href='#'>className instead of class</li>
//       </ul>
//       <img src='' alt='' />
//       <input type='text' name='' id='' />
//     </div>
//   )
// }

// const Greeting_Complex = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement( 'h3', {}, 'Passing JSX into the Root UI the hard way' )
//   );
// };

//Pass the Greeting <JSX/> into the render method

// Nested Components, React Tools
function Greeting() {
  return (
    <div>
      <Person /><Person></Person>
      <p>This is my Responsive REACT UX Portfolio</p>
    </div>
  )
}

const Person = () => <h1>Steven Barkley</h1>

ReactDOM.render( <Greeting />, document.getElementById( 'root' ) )

//Pass JSX as <i></i> or <i/>