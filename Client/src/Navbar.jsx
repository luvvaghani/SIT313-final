import React  from "react";
import './index.css';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Navbar(){
return(
    <div class = "navigation">
        <div class="wrap">
        <Link to="/">
            <div class="title">
                <a><h1>DEV@Deakin</h1></a>
            </div>
            </Link>
            <div className="searchbar"> <input type="text" />
                <button type="button" class="iconfont">&#xe82e;</button>  
            </div>
            <div className="nav-bar">
               <button class="topbtn">POST</button>
               <Link to="/login">
                <button class="topbtn">LOGIN</button>
                </Link>
            </div>     
        </div> 
        <Outlet />
    </div>
)
}
export default Navbar;