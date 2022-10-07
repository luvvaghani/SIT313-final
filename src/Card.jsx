import React from "react";

import image4 from './Image/1.png'

import './index.css';

const Card = (props) =>{

    return(

        <div  class="card">
            <img src={props.avatar} 
            alt="Avatar" width="150px" height="190px"/>
        

            <h3>{props.bookname}</h3> 
            <p>{props.description}</p>



            <div id="image4">
                <img src={image4} alt="1" width="15" height="15"/>
                <a>{props.name} </a>
            </div>
           
        </div>
        

    )
}

export default Card;