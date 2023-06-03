import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Project = ({
  projectLink,
  imgUrl,
  altImgText,
  title,
  subtitle,
  githubLink,
}) => {
  return (
    <section className="mt-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex md:flex-row flex-col mt-[80px] mb-[120px]"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.5)}
          className="md:w-[60%] w-auto"
        >
          <a href={projectLink} target="_blank">
            <motion.img
              whileHover={{ scale: 1.075 }}
              whileTap={{ scale: 0.8 }}
              src={imgUrl}
              alt={altImgText}
              className="w-full rounded-lg shadow-[0_0px_20px_2px_#000] hover:shadow-none hover:border-[1px] border-black md:mb-0 mb-6"
            />
          </a>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.5)}
          className="text-[18px] justify-start md:ml-8 flex-grow"
        >
          <h3 className="font-bold pb-4 min-[832px]:text-[20px] lg:text-[24px]">
            {title}
          </h3>
          <ul className="md:text-[16px] min-[832px]:text-[18px] text-center">
            <li className="font-medium mb-4">{subtitle}</li>
          </ul>
          <div className="flex md:justify-around justify-evenly mt-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              href={projectLink}
              target="_blank"
              className="bg-black text-white font-bold py-2 px-4 rounded"
            >
              LIVE
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              href={githubLink}
              target="_blank"
              className="bg-black text-white font-bold py-2 px-4 rounded"
            >
              CODE
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Project;
