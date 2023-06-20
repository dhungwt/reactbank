import React, { useEffect, useState } from "react";
import Debit from "./Components/Debit";
import Credit from "./Components/Credit";
import Home from "./Components/Home";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  //const [balance, setBalance] = useState(0);
  const [debits, setDebits] = useState(0); //debit at loading
  const [credits, setCredits] = useState(0); //credit at loading
  const [creditDesc, setCreditDesc] = useState("");
  const [creditHistory, setCreditHistory] = useState([]);
  const [debitHistory, setDebitHistory] = useState([]);
  const [currentDebits, setCurrentDebits] = useState(0);
  const [currentCredits, setCurrentCredits] = useState(0); //current total of credits
  const [inputCredits, setInputCredits] = useState(0); //credit amt user enters to be added

  function balanceTotal(credits, debits) {
    console.log("CREDITS:" + credits);
    console.log("DEBITS:" + debits);
    const total = credits - debits;
    return total;
  }
  let balance = balanceTotal(credits, debits);
  console.log(balance);

  useEffect(() => {
    fetchCredit();
    fetchDebit();
  }, []);

  useEffect(() => { //recalculates when credits or debits change
    const balance = credits - debits;
    console.log(balance);
  }, [credits, debits]);

  async function fetchCredit() {
    try {
      const result = await axios.get(
        "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
      );
      setCredits(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchDebit() {
    try {
      const result = await axios.get(
        "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
      );
      setDebits(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  //handle debit and credit desc submission, maybe grab url to distinguish
  function handleCreditDesc(e) {
    setCreditDesc(e.target.value);
  }

  //add credits to current balance
  function handleSubmitCredit() {
    //want to push transaction object into history ex. {desc, amount and date}
    //grab current desc/amount/date push into history
    const date = new Date().toLocaleString(); //use JS method to get date
    setCurrentCredits(currentCredits + inputCredits);
    const newCredit = {
      creditDesc: creditDesc,
      amount: inputCredits,
      date: date
    };
    setCreditHistory([...creditHistory, newCredit]);
  }
    
    // setCreditHistory([
    //   ...creditHistory,
    //   {
    //     creditDesc,
    //     amount: inputCredits,
    //     date,
    //   },
    // ]);
  

  function handleInputCredit(e) {
    //adds credit input to existing credit total
    const newCredit = e.target.value;
    setInputCredits(newCredit);
  }

  useEffect(() => {
    //logs whenever a new object is added to the credit history array
    console.log(creditHistory);
  }, [creditHistory]);


  return (
    <div className="App">
      {/* display total balance w/ all additions and reductions applied */}
      <Routes>
        <Route path="/" element={<Home balance={balance} />} />
        <Route
          path="/credit"
          element={
            <Credit
              handleSubmitCredit={handleSubmitCredit}
              handleInputCredit={handleInputCredit}
              balance={balance}
              handleCreditDesc={handleCreditDesc}
            />
          }
        />
        <Route path="/debit" element={<Debit />} />
      </Routes>
    </div>
  );
}
export default App;
