import { useEffect, useState } from "react";
import Debit from "./Components/Debit";
import Credit from "./Components/Credit";
import Home from "./Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  //const [balance, setBalance] = useState(0);
  const [debits, setDebits] = useState(0);
  const [credits, setCredits] = useState(0);

  function balanceTotal(credits, debits) {
    console.log("CREDITS:" + credits);
    console.log("DEBITS:" + debits);
    const total = credits - debits;
    return total;
  }
  const balance = balanceTotal(credits, debits);
  console.log(balance);
  useEffect(() => {
    fetchCredit();
    fetchDebit();
  }, []);

  function fetchCredit() {
    const result = 8000;
    setCredits(result);
  }

  function fetchDebit() {
    const result = 3300;
    setDebits(result);
  }

  //   async function test() {
  //     try{
  //       let result = await axios.get("https://bank-of-react-bxbys1cq8-ajlapid718.vercel.app/debits", {headers: {
  //       'Access-Control-Allow-Origin': *,
  //       ‘Content-Type’: ‘application/json'
  //     }})
  // }catch (error){
  // console.error(error)
  // }
  //   }

  return (
    <div className="App">
      {/* Making the Account Balance dynamic:

GIVEN I am on any page displaying the Account Balance
WHEN I view the Account Balance display area
THEN I should see an Account Balance that accurately represents my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits */}
      {/* dislay total balance w/ all additions and reductions applied */}
      {/* Balance Total: {balanceTotal(credits, debits)}; */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/debit" element={<Debit />} />
      </Routes>
    </div>
  );
}
export default App;
