import React, { useEffect, useState } from "react";
import Debit from "./Components/Debit";
import Credit from "./Components/Credit";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(0);
  const [debits, setDebits] = useState(0); //debit at loading
  const [credits, setCredits] = useState(0); //credit at loading
  const [creditHistory, setCreditHistory] = useState([]);
  const [debitHistory, setDebitHistory] = useState([]);
  //const [currentDebits, setCurrentDebits] = useState(0);
  //const [currentCredits, setCurrentCredits] = useState(0); //current total of credits

  //calculates current total of credits and debits
  function balanceTotal(credits, debits) {
    console.log("CREDITS:" + credits);
    console.log("DEBITS:" + debits);
    const total = Number(credits - debits);
    return total;
  }
  // let balance = balanceTotal(credits, debits);
  // console.log(balance);

  //fetches initial value upon render
  useEffect(() => {
    fetchCredit();
    fetchDebit();

  }, []);

  useEffect(() => {
    //recalculates when credits or debits change
    //const balance = ;
    console.log("line 37: " + balance);
    setBalance(Number(credits - debits))
  }, [credits, debits]);

  //fetches initial credit value
  async function fetchCredit() {
    try {
      const result = await axios.get(
        "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
      );
      setCredits(result.data);
    //  setBalance((prevBalance)=>parseInt(prevBalance)+parseInt(result.data))
      //  setCurrentCredits(credits); //set Curr Credits to initial value
    } catch (error) {
      console.error(error);
    }
  }

  //fetches initial debit value
  async function fetchDebit() {
    try {
      const result = await axios.get(
        "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
      );
      setDebits(result.data);
    //  setBalance((prevBalance)=>parseInt(prevBalance)-parseInt(result.data))
      // setCurrentDebits(debits); //set Curr debits to initial value
    } catch (error) {
      console.error(error);
    }
  }

  //add credits to current balance
  function handleSubmitCredit(inputCredits, creditDesc) {
    //want to push transaction object into history ex. {desc, amount and date}
    //grab current desc/amount/date push into history
    const date = new Date().toLocaleString(); //use JS method to get date
    setCredits(parseInt(credits) + parseInt(inputCredits));
    console.log("credits: " + credits + " inputcredits: " + inputCredits);
    const newCredit = {
      creditDesc: creditDesc,
      amount: inputCredits,
      date: date,
    };
    setCreditHistory([...creditHistory, newCredit]);
    setBalance (Number(credits - debits));
  }

  //remove debits from current balance
  function handleSubmitDebit(inputDebits, debitDesc) {
    //want to push transaction object into history ex. {desc, amount and date}
    //grab current desc/amount/date push into history
    const date = new Date().toLocaleString(); //use JS method to get date
    setDebits(parseInt(debits) + parseInt(inputDebits));
    console.log("debits: " + debits + " inputdebits: " + inputDebits);
    const newDebit = {
      debitDesc: debitDesc,
      amount: inputDebits,
      date: date,
    };
    setDebitHistory([...debitHistory, newDebit]);
    setBalance (Number(credits - debits));
  }

  // setCreditHistory([
  //   ...creditHistory,
  //   {
  //     creditDesc,
  //     amount: inputCredits,
  //     date,
  //   },
  // ]);

  useEffect(() => {
    //logs whenever a new object is added to the credit history array
    console.log(creditHistory);
  }, [creditHistory]);

  return (
    <Router>
      <div className="App">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Credit">Credit</Link>
            </li>
            <li>
              <Link to="/Debit">Debit</Link>
            </li>
          </ul>
        </nav>
        {/* Routes to features */}
        <Routes>
          <Route path="/" element={<Home balance={balance} />} />
          <Route
            path="/credit"
            element={
              <Credit
              credits={credits}
                handleSubmitCredit={handleSubmitCredit}
                balance={balance}
                creditHistory={creditHistory}
              />
            }
          />
          <Route
            path="/debit"
            element={
              <Debit
              debits={debits}
                handleSubmitDebit={handleSubmitDebit}
                balance={balance}
                debitHistory={debitHistory}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
