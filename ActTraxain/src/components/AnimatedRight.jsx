import React, { useEffect, useState, Suspense, useLayoutEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from  '../store';
import { CustomButton } from '.';
import { IntersectionObserverComponent } from '.';
import  { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    slideStopSlideAnimation,
    appearAnimation,
    getOutAnimation,


} from '../config/motion'

import logoAvif from '/logonuevo.avif'
import logoPNG from '/logonuevo.png'




const AnimatedRight  = React.memo(props => {
  const swipeDir=props["swipeDir"]
  
  
  const swapShow=props["swapShow"]
  const getOut= props["getOut"]
  const texts0 = props["texts"]
  const show = props["show"]
  const isMobileL = props["isMobileL"]
  const textBigStyle = props["textBigStyle"]
  const bigBoxStyle = props["bigBoxStyle"]

      // var textBigStyle = {color:"white", fontSize: 100}
      // var  bigBoxStyle = {backgroundColor:"orange", height: "600px" }
      // //var textSmallSize = 60
      // //var headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

      // if (isMobileL)  {
      //   textBigStyle = {color:"white", fontSize: 70, lineHeight: 1}
      //   //textSmallSize = {color:"white", fontSize: 24}
      //   bigBoxStyle = { height: "300px" }
      //   //bigBoxStyle = {backgroundColor:"orange", height: "300px" }
      //   //headerStyle = { width: '150px', height: '70px', objectFit: 'contain' }
      //   } else {
      //   textBigStyle = {color:"white", fontSize: 100}
      //   bigBoxStyle = {backgroundColor:"orange", height: "600px" }
      //   //textSmallSize = {color:"white", fontSize: 50}
      //   //headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

      //   }
  


  //var texts
  // if (texts0["texts"]){
  //   texts = texts0["texts"]
  // }else{
  //   texts= ["","",""]
  // }

  const snap = useSnapshot(state)





  
if (getOut){
  // console.log("se debería ir",show, isMobileL)
  
  return (
    
        
            
                
    // <div style={bigBoxStyle}>
    //     <div  style={bigBoxStyle}>
    //         <br></br>
  <motion.div  style={{ overflow: 'hidden'}}
  // {...headContainerAnimation}
  >

    <AnimatePresence style={bigBoxStyle}>
    {show && (
    
      <motion.div {...getOutAnimation(swipeDir,isMobileL)}>
        <h1 className='head-text' style={textBigStyle}>
        {texts0[swapShow]}
        </h1>
      </motion.div>
    )}


    </AnimatePresence>


    


  </motion.div>


    
      


)
}else{
  // console.log(textBigStyleP)
  // console.log(textBigStyle)
  // console.log("")
  // console.log(textBigStyleP)
  // console.log(textBigStyle)
  // console.log("y aqui se queda",show)
  //console.log(texts0,swapShow)
  console.log("")
  console.log(texts0[swapShow])
  return (
    
        
            
                
    // <div style={bigBoxStyle}>
    //     <div  style={bigBoxStyle}>
    //         <br></br>
  <motion.div   style={{ overflow: 'hidden'}}
  // {...headContainerAnimation}
  >

    <AnimatePresence style={bigBoxStyle}>
    {show && (
      <motion.div {...slideAnimation(swipeDir,isMobileL)}>
        <h1 className='head-text' style={textBigStyle}>
        {texts0[swapShow]}
        </h1>
        
      </motion.div>
      )}

    


    </AnimatePresence>


    


  </motion.div>


    
      


)

}

},
(prevProps, nextProps) => {


 
  var equal
  if (prevProps===nextProps){
    equal = true
  }else{
    equal = false
  }
  return equal
  // Custom comparison logic between prevProps and nextProps
  // Return true if the props are considered equal, false otherwise
})

export default AnimatedRight