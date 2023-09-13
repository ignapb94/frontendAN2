import React, { useEffect, useState, Suspense, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from  '../store';
import { CustomButton, AnimatedRight } from '.';
import { IntersectionObserverComponent } from '.';
import  { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    slideStopSlideAnimation,
    appearAnimation,


} from '../config/motion'

import logoAvif from '/logonuevo.avif'
import logoPNG from '/logonuevo.png'




const TextBig = (props) => {


const textBigStyle = props["textBigStyle"]
const bigBoxStyle = props["bigBoxStyle"]
const texts = props["texts"]
const isMobileL = props["isMobileL"]
const timesArray = props["timesArray"]
const lapseBetween = props["lapseBetween"]
const startXRef = useRef(null);


//const [blockTimer, setBlockTimer] = useState(false); 
var inputsList
var swapShow
var blockTimer
var direction

const noOptions = texts.lenght



const setInputsList = (inputs) => {
  inputsList= inputs
}

const setSwapShow = (inputs) => {
  swapShow= inputs
}

const setBlockTimer = (inputs) => {
  blockTimer= inputs
}

const setDirection = (inputs) => {
  direction= inputs
}




useEffect(() => {
  // This code will run after the initial render
  setInputsList(["intial", "initial"]);
  setSwapShow(0)
  setBlockTimer(false)
  setDirection("left")
  
 

}, []); // Empty dependency array ensures it runs only once


const [animationSeen1, setAnimationSeen1] = useState(null);
//const [animationSeen2, setAnimationSeen2] = useState(null);
//const [swapShow, setSwapShow] = useState(0); // You need to manage swapShow state

  const findNextSwap = (swipeDir,swapShow) => {
    var nextSwap
    
      if (swipeDir==="right") {
        // console.log("aqui right")
        nextSwap = swapShow +1

        if (swapShow===noOptions-1){
          // console.log("ultimo")
          nextSwap=0

        }
        // console.log(texts, swapShow)


      }
        
        if (swipeDir==="left") {
          nextSwap = swapShow -1
          // console.log("aqui left")

          if (swapShow===0){
            nextSwap=noOptions

          }
        }
      // if (texts[nextSwap] !== "" ){
      //   return nextSwap
      // }
      if (swipeDir==="right") {
      while (texts[nextSwap] === "") {
        nextSwap = (nextSwap + 1) % noOptions; // Loop back to the beginning if necessary
      }
    }else{
      while (texts[nextSwap] === "") {
        nextSwap = (nextSwap - 1) % noOptions; // Loop back to the beginning if necessary
      }

      

     }
    // console.log(swipeDir,nextSwap)

      return nextSwap
    
      

  }

  const changeAnimation = (getOut, swipeDir, swapShow, show) => {
   
    if (
      !inputsList.every((value, index) => value === [swipeDir, swapShow, show][index])
    ) {
      

      if (props.hasOwnProperty('fixedDir')) {
        swipeDir = props['fixedDir']
          
      }
      
      setInputsList([swipeDir, swapShow, show]);
      setBlockTimer(getOut);
      setDirection(swipeDir);
      
      // console.log(swapShow)

      var nextSwap
      if (getOut){
        nextSwap = findNextSwap(swipeDir,swapShow)
   
        setAnimationSeen1(null); // Set to null or an empty JSX fragment
        // console.log("re rendering 1")
        setSwapShow(swapShow)
        setAnimationSeen1(


          <AnimatedRight
          swipeDir={swipeDir}
          swapShow={swapShow}
          getOut={true}
          texts={texts}
          show={show}
          isMobileL={isMobileL}
          textBigStyle={textBigStyle}
          bigBoxStyle={bigBoxStyle}

          />

        );

      //   setTimeout(() => {
      //      // console.log("re rendering 2")
          
      //     setAnimationSeen1(null)
      //     setAnimationSeen1(


      //      <AnimatedRight
      //      swipeDir={swipeDir}
      //      swapShow = {swapShow}
      //      getOut={false}
      //      texts={texts}
      //      show={show}
      //      isMobileL={isMobileL}
      //      textBigStyle={textBigStyle}
      //     bigBoxStyle={bigBoxStyle}
 
      //      />
      //    )
         
      //  }, 500);

      //  setTimeout(() => {
      //   console.log("re rendering 3")
      //   setSwapShow(nextSwap)
      //    setAnimationSeen1(


      //     <AnimatedRight
      //     swipeDir={swipeDir}
      //     swapShow = {nextSwap}
      //     getOut={false}
      //     texts={texts}
      //     show={show}
      //     isMobileL={isMobileL}
      //     textBigStyle={textBigStyle}
      //     bigBoxStyle={bigBoxStyle}

      //     />
      //   )
        
      // }, 1500);
      

      setTimeout(() => {
        // console.log("FUERA ANIM")
        setBlockTimer(false)
        setSecondsPassed(timesArray[nextSwap])
      }, 1000);

      

   

      } else {

        // console.log("re rendering 4")
    
        setSwapShow(swapShow)

       
        setAnimationSeen1(


          <AnimatedRight
          swipeDir={swipeDir}
          swapShow = {swapShow}
          getOut={false}
          texts={texts}
          show={show}
          isMobileL={isMobileL}
          textBigStyle={textBigStyle}
          bigBoxStyle={bigBoxStyle}

          />
        );

        

        
      }
    }else{
      
    }
};

const evaluateSeconds = (startTime) => {
  const currentTime = new Date().getTime();
            var elapsedTimeInSeconds = Math.floor((currentTime - startTime) );

            if (state.rollindDir>0){
              setDirection("left")
            }else{
              setDirection("right")
            }
            
            if (elapsedTimeInSeconds>timesArray[timesArray.length - 1]){
                elapsedTimeInSeconds = elapsedTimeInSeconds - (Math.floor(elapsedTimeInSeconds/timesArray[timesArray.length - 1])*timesArray[timesArray.length - 1])
            }

            setSecondsPassed(elapsedTimeInSeconds);

            for (let i = 0; i < timesArray.length-1; i++) {
              
              if (elapsedTimeInSeconds>=timesArray[i] && elapsedTimeInSeconds<(timesArray[i+1]-lapseBetween)){
                //console.log("show",elapsedTimeInSeconds,i)
                return changeAnimation(false, direction, i,true)
              
              } else if (elapsedTimeInSeconds>=(timesArray[i+1]-lapseBetween) && elapsedTimeInSeconds<timesArray[i+1]){
                //console.log("hide",elapsedTimeInSeconds,i)
                return changeAnimation(false, direction, i-1,false)
              }
          }


}



const handlePointerStart = (event) => {
  const startXPos = event.clientX || event.touches[0].clientX;
  const startYPos = event.clientY || event.touches[0].clienty;
  startXRef.current = startXPos;
  
};


    // You can also log the value of startX to see its updated value
   

const handlePointerEnd = (event) => {
  
    const startExp = startXRef.current;
  if (startExp !== null) {
    const endXPos = event.clientX || event.changedTouches[0].clientX;
    const swipeDistance = endXPos - startExp;
    if (isMobileL){
      state.rollindDir=swipeDistance/20
    }else{

    state.rollindDir=swipeDistance/220
    }
    if (swipeDistance > 0) {
      changeAnimation(true,"left",swapShow, true)
    } else if (swipeDistance < 0) {
      // Left swipe

      changeAnimation(true,"right",swapShow, true)
      
    }
    startXRef.current = null;
  }

  // setTimeout(() => {
  //   setBlockTimer(false)
  //   return changeAnimation(true,"left",swapShow);
  // }, 6000);
};

useEffect(() => {
    window.addEventListener('mousedown', handlePointerStart);
    window.addEventListener('touchstart', handlePointerStart);
    window.addEventListener('mouseup', handlePointerEnd);
    window.addEventListener('touchend', handlePointerEnd);
  
    return () => {
      window.removeEventListener('mousedown', handlePointerStart);
      window.removeEventListener('touchstart', handlePointerStart);
      window.removeEventListener('mouseup', handlePointerEnd);
      window.removeEventListener('touchend', handlePointerEnd);
    };
  }, []);






    

    const [secondsPassed, setSecondsPassed] = useState(0);
    // const [swapShow, setSwapShow] = useState(true);
   

   

    const totalCycle = 18000
    const startTextCicle = 0
    //const lapseBetween = 3000
    const anim1=8100
    

    useEffect(() => {
        const startTime = new Date().getTime();
        
        const interval = setInterval(() => {

          if (!blockTimer){
            evaluateSeconds(startTime,)
            
          
          } 
        
        }, 100);
       
        
        
        




    }, []);

  
    useEffect(() => {
    }, [inputsList]);

    

  return (
    
        
            
                
                    // <div style={bigBoxStyle}>
                    //     <div  style={bigBoxStyle}>
                    //         <br></br>
                            <motion.div   style={{ overflow: 'hidden'}}
                            // {...headContainerAnimation}
                            >
                                {animationSeen1}
                                
                            </motion.div>
                    //     </div>
                    // </div>

                    
                      

        
  )
}


export default TextBig