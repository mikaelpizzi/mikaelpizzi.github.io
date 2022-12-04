import Projects from "../components/projects";
import Meet from "../components/calendly";
import Text from "../components/text";
import Header from "../components/header";
import React from 'react'


export default function Home() {

  return (
    <div className="text-center lg:px-[10%] xl:px-[16%] px-0 lg:bg-[#1e1b01] bg-white width-full">
      <div className= "bg-slate-100 lg:px-24 sm:px-8 px-6 py-8 width-full">

          <Header />

          <Text />

          <div className="flex items-center justify-around sm:justify-start">
            <Meet />

            <a href="!#" target="_blank">
              <img
                src="/email.png"
                alt="email"
                className="w-[40px]"
              />
            </a>

            <a href="!#" target="_blank">
              <img
                src="/linkedin.png"
                alt="email"
                className="w-[40px]"
              />
            </a>

            <a href="!#" target="_blank">
              <img
                src="/twitter.png"
                alt="email"
                className="w-[40px]"
              />
            </a>
          </div>
          <Projects />
          <Meet />
      </div>
    </div>
  )
}
