import React from "react";
import HeroSection from "../components/Blogs/HeroSection";
import Announcements from "../components/Blogs/Announcements";
import Sustainability from "../components/Blogs/Sustainability(Stats)";
import Brands from "../components/Blogs/Brands";
import News from "../components/Blogs/News";

const Blog = () => {
  return (
    <>
      <HeroSection />
      <Announcements />
      <Sustainability />
      <Brands />
      <News />
    </>
  );
};

export default Blog;
