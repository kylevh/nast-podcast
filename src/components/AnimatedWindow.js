import { motion } from 'framer-motion';

const animations = {
    initial: { scale: .1, x: -750, y:800},
    animate: { scale: 1, x:100, y:150 },
    exit: { scale: .1, x: -750, y:800 }
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