import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGooglePay } from "react-icons/fa";
import { BiLogoMastercard } from "react-icons/bi";
import { GrAmex } from "react-icons/gr";
import { FaApplePay } from "react-icons/fa";
import { RiPaypalLine } from "react-icons/ri";
import { PiCopyrightThin } from "react-icons/pi";
import './Footer.css'

const Footer =()=>(
 <div className="countainer-main">
    <div className="FOOTER-COUNTAINER">
        <div>
            <h1 className="name">BE THE FIRST YOU KNOW</h1>
            <p className="paragraph">sign up for updates from metta muse</p>

            <input className="input" type="search" placeholder="Enter your e-mail"/>
            <button className="button" type="button">SUBSCCRIBE</button>
        </div>
        <div>
<h1 className="name">CONTACT US</h1>
<p className="paragraph">+442211335360</p>
<p className="paragraph">Customercare@mettamesu.com</p>
<h1 className="name">CURRENCY</h1>
<p className="paragraph">+USD</p>
<p className="paragraph2">Transactions will be complted in Euros and a currency reference is avalible on hover</p>
        </div>
    </div>

<div className="last-footer">
    <div>
        <h1 className="name">metta muse</h1>
        <p className="paragraph">About us</p>
        <p className="paragraph">Stories</p>
        <p className="paragraph">Artisans</p>
        <p className="paragraph">Boutiques</p>
        <p className="paragraph">Contact us</p>
        <p className="paragraph">EU Compliances Does</p>
    </div>
   <div>
    <h1 className="name">QUICK LINKS</h1>
   <p className="paragraph">Order& Shiping</p>
   <p className="paragraph">Join/Login as a saller</p>
   <p className="paragraph">Payment&Pricing</p>
   <p className="paragraph">Return&Refund</p>
   <p className="paragraph">FAQS</p>
   <p className="paragraph">Privacy Policy</p>
   <p className="paragraph">Terms&Conditions</p>
   </div>
   <div>
    <h1 className="name">FOLLOWS US</h1>
     
      <FaInstagram className="follows-us"/>
      <CiLinkedin className="follows-us"/>
    
    <div>
        <h1 className="name">metta muse ACCEPTS</h1>
        <div className="payment">

       
        <div className="pay">
        <FaGooglePay className="google"/>
        </div>
        <div className="pay">
        <BiLogoMastercard className="google"/>
        </div>
        <div className="pay">
        <RiPaypalLine className="google"/>
        </div>
        <div className="pay">
        <GrAmex className="google"/>
        </div>
        <div className="pay">
        <FaApplePay className="google"/>
        </div>
        </div>
        
    </div>
   </div>
</div>
   <div className="cpoy-countainer">
    <p className="copy">Copyright <PiCopyrightThin/>2023 mettamuse.All right sreserved</p>
   </div>
 </div>
)
export default Footer