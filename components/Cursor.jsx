import React from 'react';
import { motion } from 'framer-motion';
import { useMouse } from "@uidotdev/usehooks";

const CustomCursor = () => {
    const [state, ref] = useMouse();
    console.log(state.x,state.y)
  return (
    <motion.div
      animate={{left: state.x,top: state.y}}
      transition={{ease:[0.16, 1, 0.3, 1], duration:0.6}}
      className="fixed w-3 h-3 rounded-full bg-[#E57C23] pointer-events-none z-50 transform origin-center"></motion.div>
  );
};

export default CustomCursor;

