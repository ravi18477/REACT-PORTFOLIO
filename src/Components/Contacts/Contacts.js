import React from 'react';
import './style.css';
import { FaRegEnvelope,FaLinkedinIn } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";


function Contacts() {
  return (
    <div>
    <div className='mycontact'>
        <div className="head"><h3>My Contact</h3></div>
        <div className='line'><hr /></div>

         <div className="content">
             <div className="mail">
             <pre><FaRegEnvelope></FaRegEnvelope>   ravib18477@gmail.com</pre>
              </div>       
             <div className="phone">
              <pre><CgPhone></CgPhone>  +91 9798356530</pre>
             </div>
             <div className="address">
                <pre><AiFillHome></AiFillHome>   Bokaro, Jharkhand</pre>
             </div>
             <div className="linkedin">
                <pre><FaLinkedinIn></FaLinkedinIn>   https://tinyurl.com/yd8bbs47</pre>
             </div>
           
        </div>
      
    </div>
    </div>
  )
}

export default Contacts
