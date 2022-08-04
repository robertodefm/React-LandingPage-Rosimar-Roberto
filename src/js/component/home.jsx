import React from "react";
import Nabvar from "./navbar.jsx";
import Jumbotrom from "./main.jsx";
import Cards from "./card.jsx";
import Footers from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<header>
				<Nabvar/>
			</header>
			<main className="container">
				<Jumbotrom/>
				<Cards/>
			</main>
			<footer className="container">
				<Footers/>
			</footer>
		</div>
	);
};

export default Home;
