import React from "react";
import Banner from "../../components/banner/Banner";
import BestSelling from "../../components/bestSelling/BestSelling";
import CategorySection from "../../components/categorySection/CategorySection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategorySection></CategorySection>
      <BestSelling></BestSelling>
    </div>
  );
};

export default Home;
