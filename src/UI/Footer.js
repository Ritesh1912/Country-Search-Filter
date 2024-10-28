import React from 'react'
import footerApi from '../api/footerApi.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'


const Footer = () => {

  const footerIcon = {
    MdPlace: <MdPlace/>,
    IoCallSharp: <IoCallSharp/>,
    TbMailPlus: <TbMailPlus/>,
  }

  return (

    <footer className='footer-section'>
    
        <div className='container grid grid-three-cols'>
           {
             footerApi.map((curData, index)=>{
                
                const {icon, title, details} = curData;

                return(
                  <div className='footer-contact' key={index}>
                     <div className='icons'>
                       {footerIcon[icon]}
                     </div>
                     <div className='footer-contact-text'>
                       <p>{title}</p>
                       <p>{details}</p>   
                     </div>
                  </div>
                )
             })
           }  
        </div> 

        <div className='copyright-area'>
           <div className='container'>
              <div className='grid grid-two-cols'>

                 <div className='copyright-text'>
                    <p>
                       Copyright &copy; 2024, All Right Reserved

                       <NavLink to="/" className="foot-set">
                         CodeTechnical
                       </NavLink>
                    </p>
                 </div>

                 <div className='footer-menu'>
                    <ul>
                       <li>
                         <NavLink to="/">Home</NavLink>
                       </li>
                       <li>
                         <NavLink to="/" >
                            Social
                         </NavLink>
                       </li>
                       <li>
                         <NavLink to="/" >
                            Source Code
                         </NavLink>
                       </li>
                       <li>
                         <NavLink to="/contact">Contact</NavLink>
                       </li>
                    </ul>
                 </div> 

              </div>
           </div> 
        </div>

    </footer>

  )
}

export default Footer