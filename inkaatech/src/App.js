// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import TextField from "./components/atoms/TextField";

function App() {
    return (
        <div className="App">
            <h1>Testing App Components</h1>
            <Button buttonStyle="btn--primary-square">Business</Button>
            <TextField
                // ref={inputRefs.current[0]}
                name="username"
                // label="Username*:"
                // onChange={handleChange}
                placeholder="First Name*"
                validation={"required|min:6|max:12"}
            />
        </div>
    );
}

export default App;
