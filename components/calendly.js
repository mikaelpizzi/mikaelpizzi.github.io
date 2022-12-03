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
            className="duration-150"
            type="button"
          >
            {/* <img src="/icons/calendar.svg" className="w-8 h-8" alt="mail" /> */}
            &nbsp;
            <span className="calendly-text">Let&apos;s talk</span>
          </motion.button>
        </div>
    );
}
 
export default Meet;