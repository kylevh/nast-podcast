import { motion } from 'framer-motion';

const animations = {
    initial: { scale: 0.1 },
    animate: { scale: 1 },
    exit: {  }
};

function AnimatedWindow({ children }) {
    return (
        <motion.div variants={animations}
            initial="initial"
            animate="animate"
            exit="exit" 
            transition={{ duration: 0.5 }}
            >
            {children}
        </motion.div>
    )
}

export default AnimatedWindow