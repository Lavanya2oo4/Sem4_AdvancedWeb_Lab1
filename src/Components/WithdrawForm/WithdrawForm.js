import React from 'react'
import "./WithdrawForm.css"
import CustomButton from '../CustomButton/CustomButton'
import { useNavigate } from 'react-router-dom'


const WithdrawForm = (props) => {
 
  let navigate=useNavigate()

  const handleWithdraw=()=>{
    props.updateAlert("",true)
    let amt=(document.getElementById("amountInput").value)
    let acc=(document.getElementById("accNum").value)
    if(amt=="" ||acc=="" ){
      return
    }

    props.withdrawFunc(parseFloat(amt))
  }
  const handleDeposit=()=>{
    props.updateAlert("",true)

    let amt=(document.getElementById("amountInput").value)
    let acc=(document.getElementById("accNum").value)

    if(amt=="" || acc==""){
      return
    }
    props.depositFunc(parseFloat(amt))

  }

  return (
    <div id="withdrawDiv">
        <h2>{props.title}</h2>
        <br />
        <br />
      <form>

        <label htmlFor="accNum">AccountNumber:  </label>
        <input type="number" id="accNum" placeholder='XXXXXXXX'/>
        
        <br/>
        <br/>

        <label htmlFor="amountInput">Amount:  </label>
        <input type="number" id="amountInput" placeholder='$' />
    
        
      </form>

      <div id="formControl">
  
       <button onClick={()=>{
        if(props.title=="Withdraw"){
          handleWithdraw()
        }
        else{
          handleDeposit()
        }
       }
       }>{props.title}</button>
       <button onClick={()=>{
        props.updateAlert("",true)

        navigate("/")
       }}>Cancel</button>
      </div>
    </div>
  )
}

export default WithdrawForm
