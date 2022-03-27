import React from 'react';
// Need to inject component functions Greetings into the index.html root need to use//
import ReactDOM from 'react-dom';
//import './App.css';
// ReactDom uses a renderMethod ... used at end of file
//import './App.css';
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

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h1>Steven Barkley is a person</h1>
// const Message = () => <p>This is a message in JSX</p>

// ReactDOM.render( <Greeting />, document.getElementById( 'root' ) )

// //Pass JSX as <i></i> or <i/>

//CSS
// ./ mean same folder reference

//Setup vars
const title = "I love you to the Moon and Back";
const author = "Amelia Hepworth"
const img = 'https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg'
function BookList() {
  return (
    <section >
      <Book job='developer' />
      <Book title='random title' number={ 22 } />

    </section>
  );
}
const Book = ( props ) => {
  console.log( props )
  return (
    <article>
      <img src={ img } alt='' />
      <h1> { title } </h1>
      <h4> { author } </h4>
      <p> { props.job }</p>
      <p>{ props.title }</p>
    </article>
  )
}

ReactDOM.render( <BookList />, document.getElementById( 'root' ) )

// //Pass JSX as <i></i> or <i/>