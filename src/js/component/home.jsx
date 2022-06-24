import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron"; 
import { Cardlist } from "./Cardlist"; 
import { Footer } from "./Footer"; 
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<Cardlist/>
			<Footer/>
		</div>
	);
};

export default Home;
