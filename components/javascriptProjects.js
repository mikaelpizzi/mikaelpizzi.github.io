import React from "react";
import Project from "./project";

const JavascriptProjects = () => {
  return (
    <>
      <Project
        projectLink="https://restaurant-mikaelpizzi.vercel.app/"
        imgUrl="/restaurant.jpg"
        altImgText="Restaurant project image"
        title="Restaurant"
        subtitle="Restaurant landing page using React"
        githubLink="https://github.com/mikaelpizzi/restaurant"
      />
      <Project
        projectLink="https://instagram2-mikaelpizzi.vercel.app/"
        imgUrl="/instagram2.jpg"
        altImgText="Instagram project image"
        title="Instagram 2"
        subtitle="Instagram clone made with NextJS, custom NextAuth, Firebase v9, Recoil,
        FakerJS and TailwindCSS"
        githubLink="https://github.com/mikaelpizzi/instagram2"
      />
      <Project
        projectLink="https://metaversus-mikaelpizzi.vercel.app/"
        imgUrl="/metaversus.jpg"
        altImgText="Metaversus project image"
        title="Metaversus"
        subtitle="Next 13 website with Framer Motion and TailwindCSS"
        githubLink="https://github.com/mikaelpizzi/metaversus"
      />
      <Project
        projectLink="https://therealnews-mikaelpizzi.vercel.app/"
        imgUrl="/news.jpg"
        altImgText="The Real News project image"
        title="The Real News"
        subtitle="Next 13 news app with Typescript, Stepzen, GraphQL and Tailwind"
        githubLink="https://github.com/mikaelpizzi/news-app"
      />
      <Project
        projectLink="https://product-hunt-3f790.web.app/"
        imgUrl="/product-hunt.jpg"
        altImgText="Product hunt clone project image"
        title="Product Hunt clone"
        subtitle="A Product Hunt clone using NextJS"
        githubLink="https://github.com/mikaelpizzi/producthuntnext"
      />
    </>
  );
};

export default JavascriptProjects;
