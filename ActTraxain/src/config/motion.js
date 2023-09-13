export const transition = { type: "spring", duration: 1 };
export const transition2 = { ease: "easeOut", duration: 20 };
export const transition3 = { type: "spring", duration: 1 };
export const transition0 = { type: "spring", duration: 0 };

export const slideAnimation = (direction, isMobileL) => {
  if (isMobileL){
    return {
      initial: {
        x: (direction === "left") ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0 },
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: 1 },
      },
      exit: {
        opacity: 0,
        x: direction === "left" ? +100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? -100 : direction === "down" ? +100 : 0,
        transition: { ...transition, delay: 0.5 },
      },
    };
  }else{
   
 
    
    return {
      initial: {
        x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
        y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0 },
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: 1 },
      },
      exit: {
        opacity: 0,
        x: direction === "left" ? +200 : direction === "right" ? -200 : 0,
        y: direction === "up" ? -200 : direction === "down" ? +200 : 0,
        transition: { ...transition, delay: 0.5 },
      },
    };

  }
 
};

export const getOutAnimation = (direction, isMobileL) => {
  if (isMobileL){
    return {
      initial: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { ...transition3, delay: 0 },
      },
      animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { ...transition3, delay: 0 },
      },
      exit: {
        opacity: 1,
        x: direction === "left" ? +100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? +100 : direction === "down" ? -100 : 0,
        transition: { ...transition3, delay: 0.5 },
      },
    };
  }
  else{
    return {
      initial: {
        x: 0,
        y: 0,
        opacity: 1,
        //transition: { ...transition3, delay: 0 },
      },
      animate: {
        opacity: 0,
        x: direction === "left" ? +500 : direction === "right" ? -500 : 0,
        y: direction === "up" ? +500 : direction === "down" ? -500 : 0,
        transition: { ...transition3, delay: 0 },
      },
      exit: {
        opacity: 0,
        x: direction === "left" ? +500 : direction === "right" ? -500 : 0,
        y: direction === "up" ? +500 : direction === "down" ? -500 : 0,
        transition: { ...transition3, delay: 0 },
      },
    };
  }
  
};


export const slideStopSlideAnimation = (direction) => {
  const oppositeDirection = getOppositeDirection(direction); // Replace this with a function that gets the opposite direction
  
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: oppositeDirection === "left" ? -100 : oppositeDirection === "right" ? 100 : 0,
      y: oppositeDirection === "up" ? 100 : oppositeDirection === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

// Replace this function with a logic to get the opposite direction
const getOppositeDirection = (direction) => {
  if (direction === "left") return "right";
  if (direction === "right") return "left";
  if (direction === "up") return "down";
  if (direction === "down") return "up";
  return "none"; // Default case
};


export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const appearAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 4 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition2, delay: 4 },
  },
  exit: {
    opacity: 1,
    transition: { ...transition2, delay: 2 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
