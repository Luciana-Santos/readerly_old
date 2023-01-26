import { motion } from 'framer-motion';
import { LoadingContainer } from './Loading.styled';

const pathVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const Loading = () => {
  return (
    <LoadingContainer>
      <svg
        width="30"
        height="45"
        viewBox="0 0 65 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial="initial"
          animate="animate"
          variants={pathVariants}
          d="m61.188 33.056-26.9 33.546C18.497 81.5-4.05 64.06 6.202 44.081L37.17 5.464c10.627-6.86 23.422 2.76 19.503 15.64L28.834 55.82c-4.534 4.055-14.054-1.656-10.922-8.758l22.209-27.695"
          stroke="#000"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
    </LoadingContainer>
  );
};
export default Loading;
