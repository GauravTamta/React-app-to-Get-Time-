// import React from "react";
// import Heading from './Heading'
// import List from './List'

// function App(){
// return (
//     <>
//     <Heading/>
//     <List/>

//     </>
// );
// }
// export default App;

//*******************ES6 Modules Import Export in React ************************/

// const Youtuber  = "GauravLifts";
// export default Youtuber;

// const insta = "mr.grv.0";
// export {insta};

//***********************#5: Create Simple Calculator App in React JS ***************/

// import React from 'react';
// import {add,sub , mult,div}  from "./Calc"

// function App(){
//     return(
//         <>
//             <ul>
//             <li>sum of two number is {add(40,4)}</li>
//             <li>{sub(40,4)}</li>
//             <li>{mult(40,4)}</li>
//             <li>{div(40,4)}</li>
//             </ul>
//         </>
//     );

// }

// export default App;

//************************  Hook conceft ***************************************

// import React, { useState } from "react";

// const App = () =>{
// const state = useState();
// console.log(state);

// const [count , setCount] = useState();

// const IncNum = () => {
// console.log ("clicked" + count++);

// };
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum} > Click me</button>
//         </>
//     )
// }

// import React from "react";

// const App = () => {
//     let newTime = new Date().toLocaleTimeString();

//     return (
//         <>
//             <h1>{newTime}</h1>
//             <button>get time</button>
//         </>
//     )
// }

// export default App;

import React, { useState } from "react";
const App = () => {
  let newTime = new Date().toLocaleTimeString();
  // ************NOTE -> Hook concepts ****************************

  const [ctime, setCtime] = useState(newTime);
  //   [variable,updateted]

  const UpdateTime = () => {
     newTime = new Date().toTimeString();
    setCtime(newTime);
  };

  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>get Time</button>
    </>
  );
};

export default App;
