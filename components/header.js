import { motion } from "framer-motion";

const Header = () => {
    return ( 
        <header className="flex items-center justify-around mb-4 pb-4">
            <a href="!#" target="_blank">
                <motion.img 
                    whileHover={{ scale: 1.15 }}
                    src="/logo.jpg" 
                    alt='portrait photo'
                />
            </a>
            
            <div className="flex">
            <a href="!#" target="_blank">
            <motion.img
                whileHover={{ scale: 1.15 }}
                src="/email.png"
                alt="email"
                className="sm:w-[40px] w-[25px] sm:mr-16 mr-4 ml-4"
            />
            </a>

            <a href="!#" target="_blank">
            <motion.img
                whileHover={{ scale: 1.15 }}
                src="/linkedin.png"
                alt="email"
                className="sm:w-[40px] w-[25px] sm:mr-16 mr-4"
            />
            </a>

            <a href="!#" target="_blank">
            <motion.img
                whileHover={{ scale: 1.15 }}
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