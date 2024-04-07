import { CiSearch,CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoLogoReact } from "react-icons/io5";


import './Header.css'


const Header =()=>(


    <div>
        <div className="log-countainer">
            <div className="log">
               <IoLogoReact className="logs"/>
            </div>
            <h1 className="heading-name">LOGO</h1>
            <div className="log">
              <CiSearch className="logs"/>
              <CiHeart  className="logs"/>
              <IoBagOutline  className="logs"/>
              < CiUser   className="logs"/>
             
             
            </div>
            
            
        </div>
        <div className="header-heading">
            <h1 className='heading'>SHOP</h1>
            <h1 className='heading'>SKILL</h1>
            <h1 className='heading'>STORIES</h1>
            <h1 className='heading'>ABOUT</h1>
            <h1 className='heading'>COUNTACT US</h1>
        </div>
    </div>

)

export default Header