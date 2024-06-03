import React from "react";
import Card from "./Card.jsx";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

const Home = () => {

	const CardDataOne = {
    title:"card",
    imageUrl:"",
    description:"blabla",
    buttonUrl:"",
    buttonLabel:"",
  }
  const CardDataTwo = {
    title:"card",
    imageUrl:"",
    description:"blabla",
    buttonUrl:"",
    buttonLabel:"",
  }
  const CardDataThree = {
    title:"card",
    imageUrl:"",
    description:"blabla",
    buttonUrl:"",
    buttonLabel:"",
  }
  const CardDataFour = {
    title:"card",
    imageUrl:"",
    description:"blabla",
    buttonUrl:"",
    buttonLabel:"",
  }

	return (
    <div>
      <NavBar/>
      <Jumbotron/>
      <div className="container d-flex gap-5 mt-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
