import Projects from "../components/projects";
import Meet from "../components/calendly";
import Text from "../components/text";
import Header from "../components/header";
import React from 'react'


export default function Home() {

  return (
    <div className="text-center lg:px-[10%] xl:px-[16%] bg-[#1e1b01]">
      <div className= "bg-slate-100 px-24 py-8">

          <Header />

          <Text />
          
          
          
          <Meet />
          <Projects />
          <Meet />

      </div>
    </div>
  )
}
