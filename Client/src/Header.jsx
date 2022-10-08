import React  from "react";
import './index.css';
import image from './Image/header.jpg'


function Header(){
return(
    
    <div class="wrap">

        <div class="Image-part">
            <a href = " # ">
               <img src={image }  alt="Deakin Campus" width="100%" height="100%"></img>
            </a>
        </div>

    </div>
)

}

export default Header;