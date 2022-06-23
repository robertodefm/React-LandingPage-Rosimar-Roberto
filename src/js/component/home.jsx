import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron"; 
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="Cardlist"></div>
			<div className="Footer"></div>

		</div>
	);
};

export default Home;
