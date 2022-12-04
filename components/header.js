import { motion } from "framer-motion";

const Header = () => {
    return ( 
        <header className="flex items-center justify-around mb-4 pb-4">
            <a href="https://www.linkedin.com/in/mikaelpizzi/" target="_blank">
                <motion.img 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.8 }}
                    src="/logo.jpg" 
                    alt='portrait photo'
                />
            </a>
            
            <div className="flex">
                <a href="mailto:mikaelangelopizzi@gmail.com" target="_blank">
                    <motion.img
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.8 }}
                        src="/email.png"
                        alt="email"
                        className="sm:w-[40px] w-[25px] sm:mr-16 min-[480px]:mr-8 mr-4 ml-4"
                    />
                </a>

                <a href="https://www.linkedin.com/in/mikaelpizzi/" target="_blank">
                    <motion.img
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.8 }}
                        src="/linkedin.png"
                        alt="email"
                        className="sm:w-[40px] w-[25px] sm:mr-16 min-[480px]:mr-8 mr-4"
                    />
                </a>

                <a href="https://twitter.com/mikaelpizzi" target="_blank">
                    <motion.img
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.8 }}
                        src="/twitter.png"
                        alt="email"
                        className="sm:w-[40px] w-[25px]"
                    />
                </a>
            </div>
        </header>
    );
}
 
export default Header;