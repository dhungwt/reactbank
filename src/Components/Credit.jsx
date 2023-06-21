import React, { useEffect, useState } from "react";
import App from '../App';
//get acct balance from app.js
//removing money out of acct
//balance passed in as a prop from app and credits apply additions
//presentational comps
function Credit({balance, handleSubmitCredit}) {

    const [inputCredits, setInputCredits] = useState(0); //credit amt user enters to be added
    const [creditDesc, setCreditDesc] = useState(""); //description user enters for the amount they enter

function handleSubmit(e){
    e.preventDefault();
    console.log("CREDITS: "+inputCredits)
    console.log("DESC: "+creditDesc)
    handleSubmitCredit(inputCredits,creditDesc)
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
    <div><h1>Credits</h1>
    <h2>Current Balance : {balance} </h2>
    <p></p>
    <form onSubmit={handleSubmit}>
        <label>Description of new Credit </label><input onChange = {e=> setCreditDesc(e.target.value)}/>
        <p></p>
        <label>Amount of new Credit </label><input onChange = {e=> setInputCredits(e.target.value)}/>
        <p></p>
        <button type="submit" >Add Credit</button>
    </form>
    </div>
  )
}


export default Credit;