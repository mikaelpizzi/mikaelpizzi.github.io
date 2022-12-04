import { motion } from "framer-motion";
import { footerVariants, fadeIn } from "../utils/motion";

const Footer = () => {
    return (  
        <motion.footer 
            variants={footerVariants}
            initial='hidden'
            whileInView='show'
            className="flex justify-end mt-8">
            <a href="mailto:mikaelangelopizzi@gmail.com" target="_blank">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.8 }}
                    src="/email.png"
                    alt="email"
                    className="sm:w-[40px] w-[25px] mx-6"
                />
            </a>

            <a href="https://www.linkedin.com/in/mikaelpizzi/" target="_blank">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.8 }}
                    src="/linkedin.png"
                    alt="email"
                    className="sm:w-[40px] w-[25px] mx-6"
                />
            </a>

            <a href="https://twitter.com/mikaelpizzi/" target="_blank">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.8 }}
                    src="/twitter.png"
                    alt="email"
                    className="sm:w-[40px] w-[25px] ml-4"
                />
            </a>
        </motion.footer>
    );
}
 
export default Footer;