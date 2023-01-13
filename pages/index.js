import Projects from "../components/projects";
import Meet from "../components/calendly";
import Text from "../components/text";
import Header from "../components/header";
import Footer from "../components/footer";
import Subtitle from "../components/subtitle";
import React from 'react'

export default function Home() {
  return (
    <div className="text-center lg:px-[10%] xl:px-[16%] px-0 lg:bg-[#1e1b01] bg-white width-full">
      <div className= "bg-slate-100 lg:px-24 sm:px-8 px-6 py-8 width-full">
          <Header />
          <Text />
          <Meet />
          <Subtitle />
          <Projects />
          <Meet />
          <Footer />
      </div>
    </div>
  )
}
