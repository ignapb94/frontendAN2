import React from 'react'
import state from '../store'
import { getContrastingColor } from '../config/helpers'
import { useSnapshot } from 'valtio'
import { NavLink } from 'react-router-dom';


const CustomButton = ({ type, title, customStyles, handleClick, action, to, cssStyles }) => {
      
        const snap = useSnapshot(state)
        
    //     const generateStyle = (type) => {
    //         if(type === 'filled') {
    //             return {
    //                 backgroundColor: snap.color,
    //                 color:getContrastingColor(snap.color),
    //                 borderRadius: '0.375rem', // or 'rounded-md' if you prefer using Tailwind CSS classes directly
    //             }
    //         } else if(type === "outline") {
    //             return {
    //                 borderWidth: '1px',
    //                 borderColor: snap.color,
    //                 color: snap.color

    //             }

    //         } else if(type === "outlineLong") {
    //                 return {
    //                     borderWidth: '1px',
    //                     borderColor: snap.color,
    //                     color: snap.color,
    //                     width:"100%"
    
    //                 }
    //         } else if(type === "filledLong") {
    //             return {
    //                 backgroundColor: snap.color,
    //                 color:getContrastingColor(snap.color),
    //                 borderRadius: '0.375rem', // or 'rounded-md' if you prefer using Tailwind CSS classes directly
    //                 width:"100%"
    //             }        
            
    //     } else {
    //         return {
    //             borderRadius: '0.375rem', // or 'rounded-md' if you prefer using Tailwind CSS classes directly
    //         }

    //     }
    // }

    const handleButtonClick = () => {
        // Use window.location.href to navigate to the external URL
        window.location.href = to;
      };
    
        
      if (action === "fuction"){
        return (
            <button
            className={`px-3 py-2.5 flex-1 rounded-md ${customStyles}`}
            style={cssStyles}
            onClick={handleClick}>
                {title}
        
            </button>
          )
      }else if(action==="internal"){
       return (<button
                className={`px-3 py-2.5 flex-1 rounded-md ${customStyles}`}
                style={cssStyles}>
                  <NavLink to={to} >
                    {title}
                  </NavLink>
                </button> )

      }else if(action==="external"){
        return (
            <button
              className={`px-3 py-2.5 flex-1 rounded-md ${customStyles}`}
              style={cssStyles}
              onClick={handleButtonClick}
            >
              {title}
            </button>
          );
        
      }

        
    
    
}

export default CustomButton