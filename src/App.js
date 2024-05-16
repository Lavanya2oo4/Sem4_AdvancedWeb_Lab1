import './App.css';
import Amount from './Components/Amount/Amount';
import WithdrawForm from './Components/WithdrawForm/WithdrawForm';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from 'react';
import Alert from './Components/Alert/Alert';



function App() {
  const [balance, setBalance] = useState(10000)

  const [alert, setAlert] = useState({ text: "", hidden: true })

  function updateAlert(msg, visibility) {
    setAlert({ text: msg, hidden: visibility })
  }

  const Welcome = () => <h2 style={{ textAlign: "center", margin: "auto", fontFamily: "sans-serif" }}>Welcome To Bank Of Ontario</h2>
  
  
  function updateBalanceWithdraw(amt) {
    if (balance <= 0 || amt > balance) {
      updateAlert("Balance Not Enough for the Withdrawl", false)

      setTimeout(()=>{
        updateAlert("Balance Not Enough for the Withdrawl", true)
      },500)
      return
    }
    setBalance(balance - amt)
  }

  function updateBalanceDeposit(amt) {
    setBalance(balance + amt)
  }


  return (
    <Router>
      <div>

        <Navbar />
        <Amount currentBalance={balance} />

        <Routes>

          <Route path='/' element={<Welcome />} />
          <Route path='/withdraw' element={<WithdrawForm title="Withdraw" withdrawFunc={updateBalanceWithdraw}  updateAlert={updateAlert}/>} />
          <Route path='/deposit' element={<WithdrawForm title="Deposit" depositFunc={updateBalanceDeposit} updateAlert={updateAlert}/>} />

        </Routes>
        <Alert text={alert.text} hidden={alert.hidden} />

      </div>
    </Router>
  );
}

export default App;
