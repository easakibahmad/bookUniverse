import React, { useEffect, useState } from "react";
import Advertise from "../../components/advertised/Advertise";
import Banner from "../../components/banner/Banner";
import BestSelling from "../../components/bestSelling/BestSelling";
import CategorySection from "../../components/categorySection/CategorySection";

const Home = () => {
  const [classicAdd, setClassicAdd] = useState([]);
  const [fantasyAdd, setFantasyAdd] = useState([]);
  const [horrorAdd, setHorrorAdd] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/classicAdvertise")
      .then((res) => res.json())
      .then((data) => setClassicAdd(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/fantasyAdvertise")
      .then((res) => res.json())
      .then((data) => setFantasyAdd(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:4000/horrorAdvertise")
      .then((res) => res.json())
      .then((data) => setHorrorAdd(data));
  }, []);
  // console.log(classicAdd[0].name);
  return (
    <div>
      <Banner></Banner>
      {
        <Advertise
          classicAdd={classicAdd}
          horrorAdd={horrorAdd}
          fantasyAdd={fantasyAdd}
        ></Advertise>
      }
      <CategorySection></CategorySection>
      <BestSelling></BestSelling>
    </div>
  );
};

export default Home;
