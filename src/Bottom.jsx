import React  from "react";

import './index.css';
import image1 from './Image/facebook.png'
import image2 from './Image/twitter.png'
import image3 from './Image/instagram.png'


function Bottom(){
return(
    
        <div class="end">
            <div className="left">

                <h2>EXPLORE</h2>

                <ul>
                    <li><a> Home </a></li>
                    <li><a> Questions </a></li>
                    <li><a> Articles</a></li>
                    <li><a> Tutorials </a></li>
                </ul>

            </div>
        

            <div className="mid">

                <h2>SUPPORT</h2>

                <ul>
                    <li><a> FAQs </a></li>
                    <li><a> Help </a></li>
                    <li><a> Contact Us</a></li>
                </ul>

            </div>


            <div className="right">

                <h2>STAY CONNECTED</h2>

                <a>
                <img src={image1}  alt="facebook" width="30%" height="30%"></img>
                </a>

                <a>
                <img src={image2}  alt="twitter" width="30%" height="30%"></img>
                </a>

                <a>
                <img src={image3}  alt="instagram" width="30%" height="30%"></img>
            </a>
                
            </div>


            <div className="down">
                
                <h2>DEV@DEAKIN 2022</h2>

                <ul>
                    <li><a> Privacy Policy </a></li>
                    <li><a> Terms </a></li>
                    <li><a> Code of Conduct</a></li>
                </ul>
            </div>


        </div> 
)



}

export default Bottom;