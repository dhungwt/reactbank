import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Credit from "./Credit";
import Debit from "./Debit";

function Home({balance}) {
  return (
    <div>
    <h1><u>Bank of DollarBucks</u></h1>
    <h2> Current Balance: ${balance}</h2>
      <img src="https://i.imgur.com/QbrmTeX.png"></img>

     
    </div>
  );
}

export default Home;
