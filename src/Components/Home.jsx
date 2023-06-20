import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Credit from "./Credit";
import Debit from "./Debit";

function Home({balance}) {
  return (
    <div>
     <h1>Bank of Dollarbucks</h1> 

    <h2> Current Balance: {balance}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/credit">Credit</Link>
          </li>
          <li>
            <Link to="/debit">Debit</Link>
          </li>
        </ul>
      </nav>
      <img src="https://i.imgur.com/QbrmTeX.png"></img>

     
    </div>
  );
}

export default Home;
