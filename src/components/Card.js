import about from '../assets/images/aboutImage.png';
// import project2 from '../../assets/images/project2.jpg';
// import project3 from '../../assets/images/project3.jpg';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useAnimatedBackgroundColor } from "../hooks/useBackground";



const Card = () => {
  const { scrollYProgress } = useViewportScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 6]);
  const { backgroundColor } = useAnimatedBackgroundColor();

  return (
  
      <div className="relative lg:flex lg:flex-row lg:items-center">
        <motion.div
          className="relative h-96 w-72 lg:w-5/5 rounded-xl border-2 border-black md:mr-14"
          style={{
            rotate,
            backgroundColor,
            transformStyle: "preserve-3d",
            transform: "rotateY(25deg)",
            whileHover:"rotate(25deg)"
          }}
        >
          <motion.div
            style={{
              rotate,
              backgroundColor,
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 grid rounded-xl shadow-lg border-2 border-black"
          >
            <motion.div
              style={{
                rotate,
                backgroundColor,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-2 grid rounded-xl shadow-lg border-2 border-black"
            >
              <img
                src={about}
                alt=""
                className="absolute rounded-xl w-full h-full mx-auto lg:mx-0"
              />
            </motion.div>
          </motion.div>
        </motion.div>
       
      </div>
      
  );
};

export default Card;
