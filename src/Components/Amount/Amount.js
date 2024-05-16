import React from 'react'
import "./Amount.css"

const Amount = (props) => {
  return (
    <div id="amountDiv">
     <b>Amount: &nbsp;</b>   
     $ {props.currentBalance}
    </div>
  )
}

export default Amount
