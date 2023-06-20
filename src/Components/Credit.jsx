import React from 'react'
//get acct balance from app.js
//removing money out of acct
//balance passed in as a prop from app and credits apply additions
//presentational comps
function Credit({balance, handleSubmitCredit, handleInputCredit, handleCreditDesc}) {




  return (
    <div><h1>Credits</h1>
    <h2>Current Balance : {balance} </h2>
    <p></p>
    <form onSubmit={handleSubmitCredit}>
        <label>Description of new Credit </label><input onChange = {handleCreditDesc}/>
        <p></p>
        <label>Amount of new Credit </label><input onChange = {handleInputCredit}/>
        <p></p>
        <button type="submit" >Add Credit</button>
    </form>
    </div>
  )
}


export default Credit;