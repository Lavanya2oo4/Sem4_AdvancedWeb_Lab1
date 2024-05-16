import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import  "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        
       <div id="logo" > <Link to="/" style={{textDecorationLine:"none",color:"black",display:'flex',alignItems:'center'}}><img src="./bank.png" style={{width:"4vh",margin:"0vh 1vh"}}></img>Bank Of Ontario</Link></div>

        <div id="btnDiv">

       <Link to="/deposit"><CustomButton title="Deposit"></CustomButton></Link> 
       <Link to="/withdraw"><CustomButton title="Withdraw"></CustomButton></Link> 

        </div>
            
      </nav>
    </div>
  )
}

export default Navbar
