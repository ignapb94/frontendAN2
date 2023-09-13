import React, { useEffect, useState, Suspense, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from  '../store';
import { CustomButton, AnimatedRightSmall } from '.';
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




const TextSmall = () => {




const startXRef = useRef(null);


const [isMobileL, setIsMobile] = useState(false);
//const [blockTimer, setBlockTimer] = useState(false); 
var inputsList
var swapShow
var blockTimer
var direction
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



  const changeAnimation = (input, swipeDir, swapShow) => {
    
    if (
      !inputsList.every((value, index) => value === [swipeDir, swapShow][index])
    ) {

      
      setInputsList([swipeDir, swapShow]);
      setBlockTimer(input);
      setDirection(swipeDir);

      if (input) {
        var nextSwap = 0

        if (swapShow===0){
          nextSwap=1

        }

        setAnimationSeen1(null); // Set to null or an empty JSX fragment
        
        setAnimationSeen1(


          <AnimatedRightSmall
          swipeDir={swipeDir}
          swapShow={swapShow}
          getOut={true}
          isMobileL={isMobileL}

          />

        );

        setTimeout(() => {
        
          setAnimationSeen1(


           <AnimatedRightSmall
           swipeDir={swipeDir}
           swapShow = {2}
           getOut={false}
           isMobileL={isMobileL}
 
           />
         )
       }, 1500);

       setTimeout(() => {
         setAnimationSeen1(


          <AnimatedRightSmall
          swipeDir={swipeDir}
          swapShow = {nextSwap}
          getOut={false}
          isMobileL={isMobileL}

          />
        )
      }, 1500);

      setBlockTimer(false)
      } else {

        
        
        setAnimationSeen1(


          <AnimatedRightSmall
          swipeDir={swipeDir}
          swapShow = {swapShow}
          getOut={false}
          isMobileL={isMobileL}

          />
        );

        

        
      }
    }
};



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
    state.rollindDir=swipeDistance/10
    if (swipeDistance > 0) {
      changeAnimation(true,"left",swapShow)
    } else if (swipeDistance < 0) {
      // Left swipe

      changeAnimation(true,"right",swapShow)
      
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
   

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // You can adjust this threshold as needed
            
            let areWeMobile = window.innerWidth < 768
            state.isMobile=areWeMobile
            
        };

        handleResize(); // Call it initially to set the state based on the current width

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const totalCycle = 18000
    const startSmallTextCicle = 7000
    const lapseBetween = 1100

    useEffect(() => {
        const startTime = new Date().getTime();
        
        const interval = setInterval(() => {

          if (!blockTimer){
            const currentTime = new Date().getTime();
            var elapsedTimeInSeconds = Math.floor((currentTime - startTime) );
            
            if (elapsedTimeInSeconds>totalCycle){
                elapsedTimeInSeconds = elapsedTimeInSeconds - (Math.floor(elapsedTimeInSeconds/totalCycle)*totalCycle)
            }

            setSecondsPassed(elapsedTimeInSeconds);
            if (elapsedTimeInSeconds>startSmallTextCicle){
                if (elapsedTimeInSeconds<10100){
              
                    setSwapShow(0)
                    changeAnimation(false, direction, 0)
                  }else if (elapsedTimeInSeconds>11500 && elapsedTimeInSeconds<(totalCycle-1100)){
                    setSwapShow(1)
                    changeAnimation(false, direction, 1)
                  }else{
                    setSwapShow(2)
                    changeAnimation(false, direction, 2)
                  }
            } else {
                changeAnimation(false, direction, 2)
            }
            
          } 
        
        }, 1000);
       
        
        
        




    }, []);

  
    useEffect(() => {
    }, [inputsList]);



  return (
    
        
            
                
                    // <div style={bigBoxStyle}>
                    //     <div  style={bigBoxStyle}>
                    //         <br></br>
                            <motion.div  
                            // {...headContainerAnimation}
                            >
                                {animationSeen1}
                                
                            </motion.div>
                    //     </div>
                    // </div>

                    
                      

        
  )
}

export default TextSmall



// import React, { useEffect, useState, Suspense, useLayoutEffect, useRef } from 'react';

// import { motion, AnimatePresence } from 'framer-motion';
// import { useSnapshot } from 'valtio';
// import state from  '../store';
// import { CustomButton } from '.';
// import { IntersectionObserverComponent } from '.';
// import  { 
//     headContainerAnimation,
//     headContentAnimation,
//     headTextAnimation,
//     slideAnimation,
//     slideStopSlideAnimation,
//     appearAnimation,


// } from '../config/motion'

// import logoAvif from '/logonuevo.avif'
// import logoPNG from '/logonuevo.png'




// const TextSmall = () => {


// //   const [dragDirection, setDragDirection] = useState(0); // 0: No drag, -1: Left, 1: Right

// //   const handleDrag = (event, info) => {
// //     console.log('Drag detected');
// //     const dragDistance = info.offset.x;
// //     if (dragDistance > 0) {
// //       setDragDirection(1); // Right drag
// //     } else if (dragDistance < 0) {
// //       setDragDirection(-1); // Left drag
// //     }
// //   };

// //   const handleDragEnd = () => {
// //     setDragDirection(0); // Reset drag direction after drag ends
// //   };


// const startXRef = useRef(null);

// const handlePointerStart = (event) => {
//   const startXPos = event.clientX || event.touches[0].clientX;
//   const startYPos = event.clientY || event.touches[0].clienty;
//   startXRef.current = startXPos;
  
// };


//     // You can also log the value of startX to see its updated value
   

// const handlePointerEnd = (event) => {
//     const startExp = startXRef.current;
//   if (startExp !== null) {
//     const endXPos = event.clientX || event.changedTouches[0].clientX;
//     const swipeDistance = endXPos - startExp;
//     if (swipeDistance > 0) {
//       // Right swipe
//       adjustAnimationsForRightSwipe();
//     } else if (swipeDistance < 0) {
//       // Left swipe
//       adjustAnimationsForLeftSwipe();
//     }
//     startXRef.current = null;
//   }
// };

// useEffect(() => {
//     window.addEventListener('mousedown', handlePointerStart);
//     window.addEventListener('touchstart', handlePointerStart);
//     window.addEventListener('mouseup', handlePointerEnd);
//     window.addEventListener('touchend', handlePointerEnd);
  
//     return () => {
//       window.removeEventListener('mousedown', handlePointerStart);
//       window.removeEventListener('touchstart', handlePointerStart);
//       window.removeEventListener('mouseup', handlePointerEnd);
//       window.removeEventListener('touchend', handlePointerEnd);
//     };
//   }, []);

// const adjustAnimationsForRightSwipe = () => {

// };

// const adjustAnimationsForLeftSwipe = () => {
 
// };


//     const snap = useSnapshot(state)

//     const [secondsPassed, setSecondsPassed] = useState(0);
//     const [swapShow, setSwapShow] = useState(true);

//     // const targetRef = useRef(null);
//     // const [isVisible, setIsVisible] = useState(false);
  
//     // const handleVisible = (visible) => {
//     //     console.log("visible ahora")
//     //   setIsVisible(visible);
//     // };

//     const [isMobileL, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768); // You can adjust this threshold as needed
            
//             let areWeMobile = window.innerWidth < 768
//             state.isMobile=areWeMobile
            
//         };

//         handleResize(); // Call it initially to set the state based on the current width

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const totalCycle = 18000
//     const startSmallTextCicle = 7000
//     const lapseBetween = 1100

//     useEffect(() => {
//         const startTime = new Date().getTime();

//         const interval = setInterval(() => {
//             const currentTime = new Date().getTime();
//             var elapsedTimeInSeconds = Math.floor((currentTime - startTime) );
            
//             if (elapsedTimeInSeconds>totalCycle){
//                 elapsedTimeInSeconds = elapsedTimeInSeconds - (Math.floor(elapsedTimeInSeconds/totalCycle)*totalCycle)
//             }

//             setSecondsPassed(elapsedTimeInSeconds);
            
            
//             // var rounded = Math.round(elapsedTimeInSeconds/totalCycle)
//             // var result = rounded*totalCycle
//             if(elapsedTimeInSeconds>(totalCycle-startSmallTextCicle-lapseBetween) &&  elapsedTimeInSeconds<(totalCycle-startSmallTextCicle+lapseBetween)){
//                 setSwapShow(2)
//             }else if (elapsedTimeInSeconds>=totalCycle-startSmallTextCicle+lapseBetween){
//                 setSwapShow(1)
//             }else{
//                 setSwapShow(0)
//             }
//         }, 1000);
       
        
        
        




//     }, []);

//     var textBigStyle = {color:"white", fontSize: 100}
//     var bigBoxStyle = {backgroundColor:"orange", height: "600px" }
//     var textSmallSize = 60
//     var headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }
    
//   if (snap.isMobile)  {
//     textBigStyle = {color:"white", fontSize: 70, lineHeight: 1}
//     textSmallSize = {color:"white", fontSize: 24}
//     bigBoxStyle = { height: "300px" }
//     //bigBoxStyle = {backgroundColor:"orange", height: "300px" }
//     headerStyle = { width: '150px', height: '70px', objectFit: 'contain' }
//   } else {
//      textBigStyle = {color:"white", fontSize: 100}
//      bigBoxStyle = {backgroundColor:"orange", height: "600px" }
//      textSmallSize = {color:"white", fontSize: 50}
//      headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

//   }


//   return (
    
//         // <AnimatePresence>
//         //     {snap.intro && (
//         //         <motion.div className="home" 
//         //             // onMouseDown={handlePointerStart}
//         //             // onTouchStart={handlePointerStart}
//         //         // // {...slideAnimation('left')}
//         //         // drag
//         //         // onDrag={handleDrag}
//         //         // onDragEnd={handleDragEnd}
//         //          >
                
               

//         //             <div style={{ height: "200px" }}>
//         //             <div  style={{backgroundColor:"blue", height: "200px" }}>
//                     <motion.div className="home-content" 
//                     // {...headContainerAnimation}
//                     >
//                         <AnimatePresence style={{backgroundColor:"blue", height: "200px" }}>
//                         {secondsPassed>startSmallTextCicle && swapShow == 1 ? (
//                         <motion.div 
//                         // {...headTextAnimation}
//                         {...slideAnimation('left')}
//                             className="flex flex-col gap-5"
//                         >
//                             <h2 className='max-w-md  text-gray-600' style={textSmallSize}>
//                             Mantén control sobre la nómina de tus conductores con <strong><a href='https://drive-team.es'>Drive-Team.es</a></strong>
//                             </h2>

//                             <CustomButton
//                                 type="filled"
//                                 title="Customize it"
//                                 handleClick={() => state.intro = false}
//                                 customStyles="w-fit px-4 py-2.5 font-bold text-sm"

//                             />
//                         </motion.div>) : secondsPassed>startSmallTextCicle && swapShow == 0 && (
//                         <motion.div 
//                         // {...headTextAnimation}
//                         {...slideAnimation('left')}
//                             className="flex flex-col gap-5"
//                         >
//                             <h2 className='max-w-md  text-gray-600' style={textSmallSize}>
//                             Cumple la normativa y olvídate de problemas laborales, con <strong>Hacienda, y la Seguridad Social</strong>
//                             </h2>

//                             <CustomButton
//                                 type="filled"
//                                 title="Customize it"
//                                 handleClick={() => state.intro = false}
//                                 customStyles="w-fit px-4 py-2.5 font-bold text-sm"

//                             />
//                         </motion.div>)}
//                         </AnimatePresence>
                      
                        
//                     </motion.div>
//             //         </div>
//             //         </div>
//             //     </motion.div>
//             // )} 
//         // </AnimatePresence>

        
//   )
// }

// export default TextSmall