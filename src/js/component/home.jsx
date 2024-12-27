import React from "react";
import Header from "./header";
import PickMenu from "./pickMenu";
import Boardgame from "./gridPlay";

//create your first component
const Home = () => {
	return (
		<div className="text-center box">
			<Header />
			<PickMenu />
		</div>
	);
};

export default Home;
