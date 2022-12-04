import { motion } from "framer-motion";

const Footer = () => {
    return (  
        <footer className="flex justify-end mt-8">
            <a href="mailto:mikaelangelopizzi@gmail.com" target="_blank">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    src="/email.png"
                    alt="email"
                    className="sm:w-[40px] w-[25px] mx-6"
                />
            </a>

            <a href="https://www.linkedin.com/in/mikaelpizzi/" target="_blank">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    src="/linkedin.png"
                    alt="email"
                    className="sm:w-[40px] w-[25px] mx-6"
                />
            </a>

            <a href="https://twitter.com/mikaelpizzi/" target="_blank">
                <motion.img
                    whileHover={{ scale: 1.15 }}
                    src="/twitter.png"
                    alt="email"
                    className="sm:w-[40px] w-[25px] ml-4"
                />
            </a>
        </footer>
    );
}
 
export default Footer;