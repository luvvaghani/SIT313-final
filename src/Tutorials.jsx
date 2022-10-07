import React  from "react";
import './index.css';
import Card from "./Card"

import stafflist from "./Tutoriallist";

const CardComponent = (staff) =>{

    return(
        <Card 
            avatar = {staff.avatar}
            bookname = {staff.book}
            name = {staff.name}
            description= {staff.description}
        />
    )

}


const Tutorials =() => {
    return(
        
        <div class="wrap">
            <h1>Featured Tutorials</h1>
            <div className="tutorial">
                {stafflist.map(CardComponent)}
            </div>
            <button class="openbtn">See All Tutorials</button>
    
        </div>

    )
    
    }
    
    export default Tutorials;