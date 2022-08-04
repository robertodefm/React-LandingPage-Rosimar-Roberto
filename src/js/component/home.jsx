import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./main"; 
import { Cardlist } from "./Cards"; 
import { Footer } from "./Footer"; 
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<header>
				<Navbar/>
			</header>
			<main className="">
				<Jumbotron/>
				<Cardlist/>
			</main>
			<footer className="footer">
			<Footer/>
			</footer>
		</div>
	);
};

export default Home;
