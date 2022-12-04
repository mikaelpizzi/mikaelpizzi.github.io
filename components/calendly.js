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
            className="duration-150 block font-bold uppercase py-[0.8rem] px-[2rem] my-8 mx-auto text-center bg-black text-white sm:w-auto w-full"
            type="button"
          >
            {/* <img src="/icons/calendar.svg" className="w-8 h-8" alt="mail" /> */}
            &nbsp;
            <span className="calendly-text">Click to meet</span>
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