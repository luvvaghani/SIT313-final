
import React, {useState}  from 'react'
import './index.css';
import Button from "./Button";
import Input from "./Input";

function Server(){

    const [contact , setContact] = useState({
        email:''
    })

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    const handleClick = async() =>{

        await fetch ('http://localhost:3000/', {

        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({

            email: contact.email
        })

        })
        .then(response=> response.json())
        .then(data=> JSON)
    } 


return(


    
    <div class = "emailblock">
        <form action="/" method='post'>
        <div class="wrap">
            <div class="emailhead">
                <p>SIGN UP FOR OUR DAILY INSIDER</p>
               
            </div>
            <div className="subbtn"> 
            <Input type="email"  name="email" placeholder="Email" required="required"
            onChange = {handleChange}
             value = {contact.email}
                            />
                

                <Button
                class="button1"
                type='submit'
                text='subscribe'
                onClick={handleClick}
                />
            {/* <input type="email" name='email' placeholder='email' required="required" onChange={handleChange}/>
            <button type="submit" class="button1" onClick={handleClick}>SUBSCRIBE</button> */}
            </div> 
                          
        </div>
        </form>

    </div>   
)
}
export default Server;