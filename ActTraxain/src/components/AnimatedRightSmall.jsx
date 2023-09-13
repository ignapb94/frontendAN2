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




const AnimatedRight = (props) => {
//  console.log(swipeDir)
const swipeDir=props["swipeDir"]
const swapShow=props["swapShow"]
const getOut= props["getOut"]
const isMobileL = props["isMobileL"]
  const snap = useSnapshot(state)


var textBigStyle = {color:"white", fontSize: 100}
var bigBoxStyle = {backgroundColor:"orange", height: "600px" }
var textSmallSize = 60
var headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

if (snap.isMobile)  {
textBigStyle = {color:"white", fontSize: 70, lineHeight: 1}
textSmallSize = {color:"white", fontSize: 24}
bigBoxStyle = { height: "300px" }
//bigBoxStyle = {backgroundColor:"orange", height: "300px" }
headerStyle = { width: '150px', height: '70px', objectFit: 'contain' }
} else {
 textBigStyle = {color:"white", fontSize: 100}
 bigBoxStyle = {backgroundColor:"orange", height: "600px" }
 textSmallSize = {color:"white", fontSize: 50}
 headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

}


if (getOut){
  return (
    
    


    
<motion.div className="home-content" 
// {...headContainerAnimation}
>
    <AnimatePresence style={{backgroundColor:"blue", height: "200px" }}>
    {swapShow == 1 ? (
    <motion.div 
    // {...headTextAnimation}
    {...getOutAnimation(swipeDir, isMobileL)}
        className="flex flex-col gap-5"
    >
        <h2 className='max-w-md  text-gray-600' style={textSmallSize}>
        Mantén control sobre la nómina de tus conductores con <strong><a href='https://drive-team.es'>Drive-Team.es</a></strong>
        </h2>

        <CustomButton
            type="filled"
            title="Customize it"
            handleClick={() => state.intro = false}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"

        />
    </motion.div>) :  swapShow == 0 && (
    <motion.div 
    // {...headTextAnimation}
    {...getOutAnimation(swipeDir, isMobileL)}
        className="flex flex-col gap-5"
    >
        <h2 className='max-w-md  text-gray-600' style={textSmallSize}>
        Cumple la normativa y olvídate de problemas laborales, con <strong>Hacienda, y la Seguridad Social</strong>
        </h2>

        <CustomButton
            type="filled"
            title="Customize it"
            handleClick={() => state.intro = false}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"

        />
    </motion.div>)}
    </AnimatePresence>
  
    
</motion.div>


)
}else{
  return (
    
        
            
    <motion.div className="home-content" 
    // {...headContainerAnimation}
    >
        <AnimatePresence style={{backgroundColor:"blue", height: "200px" }}>
        {swapShow == 1 ? (
        <motion.div 
        // {...headTextAnimation}
        {...slideAnimation(swipeDir, isMobileL)}
            className="flex flex-col gap-5"
        >
            <h2 className='max-w-md  text-gray-600' style={textSmallSize}>
            Mantén control sobre la nómina de tus conductores con <strong><a href='https://drive-team.es'>Drive-Team.es</a></strong>
            </h2>

            <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"

            />
        </motion.div>) :  swapShow == 0 && (
        <motion.div 
        // {...headTextAnimation}
        {...slideAnimation(swipeDir, isMobileL)}
            className="flex flex-col gap-5"
        >
            <h2 className='max-w-md  text-gray-600' style={textSmallSize}>
            Cumple la normativa y olvídate de problemas laborales, con <strong>Hacienda, y la Seguridad Social</strong>
            </h2>

            <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"

            />
        </motion.div>)}
        </AnimatePresence>
      
        
    </motion.div>


    
      


)

}
  
}

export default AnimatedRight