import React from "react";

const Boardgame = () => {
	return (
		<div className="boardgame">
			<h2>It is X turn!</h2>
			<button>Start Over</button>
			<div className="container text-center ">
				<div className="row">
					<div className="col">0</div>
					<div className="col">1</div>
					<div className="col">2</div>
				</div>
				<div className="row">
					<div className="col">3</div>
					<div className="col">4</div>
					<div className="col">5</div>
				</div>
				<div className="row">
					<div className="col">6</div>
					<div className="col">7</div>
					<div className="col">8</div>
				</div>
			</div>
		</div>
	);
};

export default Boardgame;
