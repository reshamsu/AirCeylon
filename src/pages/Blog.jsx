import React from "react";
import HeroSection from "../components/Blogs/HeroSection";
import Announcements from "../components/Blogs/Announcements";
import Sustainability from "../components/Blogs/Sustainability";
import Brands from "../components/Blogs/Brands";

const Blog = () => {
  return (
    <>
      <HeroSection />
      <Announcements />
      <Sustainability />
      <Brands />
    </>
  );
};

export default Blog;
