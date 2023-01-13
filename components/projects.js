import { motion } from "framer-motion"
import { staggerContainer, fadeIn } from "../utils/motion"

const Projects = () => {
    return (  
        <section 
          className="mt-8"
        >
          <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25}}
            className="flex md:flex-row flex-col mt-[80px] mb-[120px]"
          >
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="md:w-[60%] w-auto"
            >
              <a
                href='https://instagram2-mikaelpizzi.vercel.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.8 }}
                  src='/instagram2.jpg'
                  alt='Metaversus project image'
                  className="w-full rounded-lg shadow-[0_0px_20px_2px_#000] hover:shadow-none hover:border-[1px] border-black md:mb-0 mb-6"
                  />
              </a>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start md:ml-8 flex-grow"
            >
              <h3 className="font-bold pb-4 min-[832px]:text-[20px] lg:text-[24px]">Instagram 2</h3>
              <ul className="md:text-[16px] min-[832px]:text-[18px] text-center">
                <li className="font-medium mb-4">Instagram clone made with NextJS, NextAuth, Firebase v9, Recoil, FakerJS and TailwindCSS</li>
                <li>Custom NextAuth</li>
                <li>Firebase v9</li>
                <li>FakerJS</li>
              </ul>
              <div className="flex md:justify-around justify-evenly mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://instagram2-mikaelpizzi.vercel.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://github.com/mikaelpizzi/instagram2'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >CODE</motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25}}
            className="flex md:flex-row flex-col mt-[80px] mb-[120px]"
          >
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="md:w-[60%] w-auto"
            >
              <a
                href='https://metaversus-mikaelpizzi.vercel.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.8 }}
                  src='/metaversus.jpg'
                  alt='Metaversus project image'
                  className="w-full rounded-lg shadow-[0_0px_20px_2px_#000] hover:shadow-none hover:border-[1px] border-black md:mb-0 mb-6"
                  />
              </a>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start md:ml-8 flex-grow"
            >
              <h3 className="font-bold pb-4 min-[832px]:text-[20px] lg:text-[24px]">Metaversus</h3>
              <ul className="md:text-[16px] min-[832px]:text-[18px] text-center">
                <li className="font-medium mb-4">Next 13 website with Framer Motion and Tailwind</li>
                <li>Next 13</li>
                <li>Tailwind</li>
                <li>Framer Motion</li>
              </ul>
              <div className="flex md:justify-around justify-evenly mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://metaversus-mikaelpizzi.vercel.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://github.com/mikaelpizzi/metaversus'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >CODE</motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25}}
            className="flex md:flex-row flex-col mt-[80px] mb-[120px]"
          >
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="md:w-[60%] w-auto"
            >
              <a
                href='https://therealnews-mikaelpizzi.vercel.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.8 }}
                  src='/news.jpg'
                  alt='The Real News project image'
                  className="w-full rounded-lg shadow-[0_0px_20px_2px_#000] hover:shadow-none hover:border-[1px] border-black md:mb-0 mb-6"
                  />
              </a>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start md:ml-8 flex-grow"
            >
              <h3 className="font-bold pb-4 min-[832px]:text-[20px] lg:text-[24px]">The Real News</h3>
              <ul className="md:text-[16px] min-[832px]:text-[18px] text-center">
                <li className="font-medium mb-4">Next 13 news app with Typescript, Stepzen, GraphQL and Tailwind</li>
                <li>Dynamic and static data</li>
                <li>Typescript</li>
                <li>GraphQL</li>
              </ul>
              <div className="flex md:justify-around justify-evenly mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://therealnews-mikaelpizzi.vercel.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://github.com/mikaelpizzi/news-app'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >CODE</motion.a>
              </div>
            </motion.div>
          </motion.div>


          <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25}}
            className="flex md:flex-row flex-col my-[120px]"
          >
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="md:w-[60%] w-auto"
            >
              <a
                href='https://product-hunt-3f790.web.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.8 }}
                  src='/product-hunt.jpg'
                  alt='product hunt clone project image'
                  className="width-full rounded-lg shadow-[0_0px_20px_2px_#000] hover:shadow-none hover:border-[1px] border-black md:mb-0 mb-6"
                  />
              </a>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start md:ml-8 flex-grow"
            >
              <h3 className="font-bold pb-4 min-[832px]:text-[20px] lg:text-[24px]">Product Hunt</h3>
              <ul className="md:text-[16px] min-[832px]:text-[18px] text-center">
                <li className="font-medium mb-4">A Product Hunt clone using NextJS</li>
                <li>Next</li>
                <li>Firebase</li>
                <li>Bootstrap</li>
              </ul>
              <div className="flex md:justify-around justify-evenly mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://product-hunt-3f790.web.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://github.com/mikaelpizzi/producthuntnext'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >CODE</motion.a>
              </div>
            </motion.div>
          </motion.div>


          <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25}}
            className="flex md:flex-row flex-col mt-[120px] mb-[60px]"
          >
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="md:w-[60%] w-auto"
            >
              <a
                href='https://mikaelpizzi-crud-redux.netlify.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  whileTap={{ scale: 0.8 }}
                  src='/crud-redux.jpg'
                  alt='CRUD Redux project image'
                  className="width-full rounded-lg shadow-[0_0px_20px_2px_#000] hover:shadow-none hover:border-[1px] border-black md:mb-0 mb-6"
                  />
              </a>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start md:ml-8 flex-grow"
            >
              <h3 className="font-bold pb-4 min-[832px]:text-[20px] lg:text-[24px]">CRUD-Redux</h3>
              <ul className="md:text-[16px] min-[832px]:text-[18px]">
                <li className="font-medium mb-4">A CRUD web application using React, Redux, REST API & Axios</li>
                <li>Redux</li>
                <li>Rest API development</li>
                <li>Bootswatch</li>
              </ul>
              <div className="flex md:justify-around justify-evenly mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://mikaelpizzi-crud-redux.netlify.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  href='https://github.com/mikaelpizzi/crud-redux'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >CODE</motion.a>
              </div>
            </motion.div>
          </motion.div>

        </section>
    );
}
 
export default Projects;