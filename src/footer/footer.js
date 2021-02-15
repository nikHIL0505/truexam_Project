import React from 'react';
import './footer.css';

import { AiOutlineInstagram, AiFillLinkedin, FaFacebook, AiFillTwitterCircle } from 'react-icons/all'
function Footer(){
 return(
     <div className="footer">
       <div className="footerGoal">
         Truexam
       </div>
       <div className="footerNav">
             <AiFillTwitterCircle className="font"/>
             <AiFillLinkedin className="font" />
             <FaFacebook className="font" />
             <AiOutlineInstagram className="font" />
       </div>
     </div>
 )

}
export default Footer;