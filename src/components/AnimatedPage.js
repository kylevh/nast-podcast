import { motion } from 'framer-motion';

const animations = {
    initial: { y: 2000 },
    animate: { y: [0, 2000, 0] },
    exit: { y: -2000 }
};

function AnimatedPage({ children }) {
    return (
        <motion.div variants={animations}
            initial="initial"
            animate="animate"
            exit="exit" 
            transition={{ duration: 1 }}
            >
            {children}
        </motion.div>
    )
}

export default AnimatedPage