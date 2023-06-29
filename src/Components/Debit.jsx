import React, { useEffect, useState } from "react";
import App from "../App";
//get acct balance from app.js
//taking money out of acct
//balance passed in as a prop from app and debits apply reductions
//presentational comp
function Debit({ debits, balance, handleSubmitDebit, debitHistory }) {
  const [inputDebits, setInputDebits] = useState(0); //debit amt user enters to be added
  const [debitDesc, setCDebitDesc] = useState(""); //description user enters for the amount they enter
  const [showHistory, setShowHistory] = useState(false);

  //event handler for when user clicks submit after entering input in the form
  function handleSubmit(e) {
    e.preventDefault();
    console.log("DEBITS: " + inputDebits);
    console.log("DESC: " + debitDesc);
    //calls handleSubmitDedit from main to pass in new transaction to update overall debits and add to transaction history
    handleSubmitDebit(inputDebits, debitDesc);
  }

//event handler to toggle transaction history
  function handleClick(e) {
    setShowHistory(!showHistory);
  }

  //   //handle debit and credit desc submission, maybe grab url to distinguish
  //   function handleCreditDesc(e) {
  //     setCreditDesc(e.target.value);
  //     console.log(creditDesc)
  //   }

  // function handleInputCredit(e) {
  //     //adds credit input to existing credit total
  //     const newCredit = e.target.value;
  //     setInputCredits(newCredit);
  //     console.log(inputCredits)
  //   }

  return (
    <div>
      <h1>Debits</h1>
      <h2>Current Balance : ${balance} </h2>
      <p></p>
      <h2>Current Debits : ${debits} </h2>
      <p></p>
      <form onSubmit={handleSubmit}>
        <label>Description of new Debit </label>
        <input onChange={(e) => setCDebitDesc(e.target.value)} />
        <p></p>
        <label>Amount of new Debit </label>
        <input onChange={(e) => setInputDebits(e.target.value)} />
        <p></p>
        <button type="submit" className="btn">Add Debit</button>
      </form>
      <p></p>
      <button type="button" className="btn" onClick={handleClick}>
        Show Transactions
      </button>
      <div>
        {/* will display transactions if showHistory is true and lists indiv transactions  */}
        {showHistory && (
          <div>
            <h3>
              <u>Transaction History</u>
            </h3>
            <ul>
              {debitHistory.map((debit, index) => (
                <li key={index}>
                  <p>Description: {debit.debitDesc}</p>
                  <p>Amount: {debit.amount}</p>
                  <p>Date: {debit.date}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Debit;
