// import react from "react";
// import  ReactDOM  from "react-dom";

// const fname ="Gaurav";
// const lname ="Tamta ";

//     ReactDOM.render(
    
//     // <react.Fragment>
//     // {/* expression in React */}
//     // <h1>my name is {flname} </h1>,

//     // </react.Fragment>,
//         <>

//         <h1>{`my name is ${fname} ${lname}`}</h1>
//         </>,
    
    
//     document.getElementById("root")

// );



// *********************************Challenge 2*************************************
// const name =    "Gaurav";
// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//     <h1>hello,my name is {name}</h1>
//     <p>Current date is {currdate} </p>
//     <p>Current Time is {currtime} </p>

//     </>,
//     document.getElementById("root")
    


// );



// JSX attributes in React

// import react from "react";
// import reactDOM from "react-dom";
// import "./index.css";


//  const name = "Gaurav";
//  const img1 =  "https://picsum.photos/200/300"
//  const img2 =  "https://picsum.photos/250/300"
//  const img3 =  "https://picsum.photos/300/300"
//  const links = " https://www.google.com/ "

// reactDOM.render(

//     // Note 
//     <>
        
   
//     {/* <h1 contentEditable="true"> Hello my name is {name}</h1> */}
//     {/* <h1 className="Heading" > Hello my name is {name}</h1> */}

//     <h1 style="color: #fa9191; " > Hello my name is {name}</h1>
//     <div className="img_div">
//     <img src={img1} alt="" />

    
//     <img src={img2} alt="" />
//     <a a href={links} target = "google">
//     <img src={img3} alt="" />
//     </a>
//     </div>
//     </>,
//     document.getElementById('root')  

// );



//************************ */ React js mini Project # Creating simple Greeting website using React js***************

// import React from  "react";
// import reactDOM from "react-dom";


// let currdate = new Date();
// currdate = currdate.getHours();


// reactDOM.render(
//     <h1>Hello sir,{ currdate} </h1>,
//     document.getElementById("root")

// );

// import React  from "react";
// import ReactDOM from "react-dom";
// import ReactDOM from "react-dom/client";
// import App from './App'

// import List from "./List";


// ReactDOM.render (<App/>,document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>)
// React Components -> In react components mostly in index.js file it
//  mostly clear so we use app.jsx and in that we use all



                   //*******************ES6 Modules Import Export in React ************************/
 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Youtuber from './App';
// import favyou,{insta} from './App';




// ReactDOM.render(
//     <>
//         <ol>
//             <li>Gaurav</li>
//             <li>{favyou}</li>
//             <li>{insta}</li>

//         </ol>
//     </>,
//     document.getElementById("root")

// );




//***********************#5: Create Simple Calculator App in React JS ***************/




// import React from 'react'
// import ReactDOM from  'react-dom';
// import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root')

// );





// ********************************#22: Props in React Js ***********************************************


// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <>
//     <div className='cards'>
//     <div className='card'>
//     <img src ="https://wallpapercave.com/uwp/uwp3752137.jpeg" alt='mypic' className='card_img'/>
//     <div className='card_info'>
//     <span className='card_category'> A Netflix Original series </span>

//     <h3 className='card_tittle'></h3>
//     <a href="" target='_blank'>
//     <button> Watch Now </button>
//     </a>
//     </div>
//     </div>


    
//     </div>

//     </>,
//     document.getElementById('root')
// )





// **************************************************    Hooks in React JS  **********************************


import React from "react";
import ReactDOM  from "react-dom"
import "./index.css";
import App from "./App";
  
ReactDOM.render(<App/>, document.getElementById('root'));







