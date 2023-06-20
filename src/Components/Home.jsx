import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Credit from "./Credit";
import Debit from "./Debit";

function Home() {
  return (
    <div>
      <h2>User Profile</h2>

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

     
    </div>
  );
}

export default Home;
