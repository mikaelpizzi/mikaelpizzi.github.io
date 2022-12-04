import Script from 'next/script'
import Head from 'next/head'
import { motion } from "framer-motion"

const Meet = () => {
    return ( 
        <section className="calendly" >
          {/* calendly widget load */}
          <Head>
            <link
              href="https://assets.calendly.com/assets/external/widget.css"
              rel="stylesheet"
            />
          </Head>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
          {/* end of calendly widget load */}

          <motion.button
            onClick={() =>
              // eslint-disable-next-line no-undef
              Calendly.initPopupWidget({
                url: 'https://calendly.com/mikaelpizzi?hide_landing_page_details=1',
              })
            }
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="duration-150 block text-base font-bold uppercase mx-auto text-center text-black w-auto"
            type="button"
          >
            {/* <img src="/icons/calendar.svg" className="w-8 h-8" alt="mail" /> */}
            &nbsp;
            <div className='flex items-center'>
              <img
                src='/calendar.png'
                alt='calendar'
                className='w-[50px] p-2'
              />
              <span className="calendly-text">Click to meet</span>
            </div>
          </motion.button>
        </section>
    );
}
 
export default Meet;