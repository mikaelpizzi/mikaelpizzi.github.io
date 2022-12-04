import Script from 'next/script'
import Head from 'next/head'
import { motion } from "framer-motion"

const Meet = () => {
    return ( 
        <div className="calendly" >
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
            className="duration-150 block text-base font-bold uppercase mx-auto text-center text-black w-auto w-full"
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
        </div>
        // button {
        //   display: block;
        //   font-weight: 700;
        //   text-transform: uppercase;
        //   border: 4px solid #fee600;
        //   padding: .8rem 2rem;
        //   margin: 2rem auto;
        //   text-align: center;
        //   background-color: white;
        //   color: black;
        // }
    );
}
 
export default Meet;