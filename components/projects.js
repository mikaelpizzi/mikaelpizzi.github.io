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
            className="flex sm:flex-row flex-col my-[120px]">
            
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="w-[60%] justify-start"
            >
              <a
                href='https://metaversus-mikaelpizzi.vercel.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  src='/metaversus.jpg'
                  alt='Metaversus project image'
                  className="width-full rounded-lg shadow-[0_0px_30px_5px_#000] hover:shadow-none hover:border-[1px] border-black"
                  />
              </a>
            </motion.div>

            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start ml-8 "
            >
              <h3 className="font-bold py-4">Metaversus</h3>
              <ul className="list-disc list-inside">
                <li>pr3ojecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>

              </ul>
              <div className="flex justify-around mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://metaversus-mikaelpizzi.vercel.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
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
            className="flex sm:flex-row flex-col my-[120px]">
            
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="w-[60%] justify-start"
            >
              <a
                href='https://product-hunt-3f790.web.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  src='/product-hunt.jpg'
                  alt='product hunt clone project image'
                  className="width-full rounded-lg shadow-[0_0px_30px_5px_#000] hover:shadow-none hover:border-[1px] border-black"
                  />
              </a>
            </motion.div>

            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start ml-8 "
            >
              <h3 className="font-bold py-4">Metaversus</h3>
              <ul className="list-disc list-inside">
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
              </ul>
              <div className="flex justify-around mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://product-hunt-3f790.web.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
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
            className="flex sm:flex-row flex-col my-[120px]">
            
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="w-[60%] justify-start"
            >
              <a
                href='https://mikaelpizzi-crud-redux.netlify.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  src='/crud-redux.jpg'
                  alt='CRUD Redux project image'
                  className="width-full rounded-lg shadow-[0_0px_30px_5px_#000] hover:shadow-none hover:border-[1px] border-black"
                  />
              </a>
            </motion.div>

            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start ml-8 "
            >
              <h3 className="font-bold py-4">Metaversus</h3>
              <ul className="list-disc list-inside">
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
              </ul>
              <div className="flex justify-around mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://mikaelpizzi-crud-redux.netlify.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://github.com/mikaelpizzi/crud-redux'
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
            className="flex sm:flex-row flex-col my-[120px]">
            
            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="w-[60%] justify-start"
            >
              <a
                href='https://mp-img-searcher.netlify.app/'
                target='_blank'
              >
                <motion.img
                  whileHover={{ scale: 1.075 }}
                  src='/image-search.jpg'
                  alt='Image search engine project image'
                  className="width-full rounded-lg shadow-[0_0px_30px_5px_#000] hover:shadow-none hover:border-[1px] border-black"
                  />
              </a>
            </motion.div>

            <motion.div 
              variants={fadeIn('right', 'tween', 0.2, 0.5)}
              className="text-[18px] justify-start ml-8 "
            >
              <h3 className="font-bold py-4">Metaversus</h3>
              <ul className="list-disc list-inside">
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
                <li>projecttttttttttttttttttttttttttttt</li>
              </ul>
              <div className="flex justify-around mt-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://mp-img-searcher.netlify.app/'
                  target='_blank'
                  className='bg-black text-white font-bold py-2 px-4 rounded'
                >LIVE</motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href='https://github.com/mikaelpizzi/image-search-engine'
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