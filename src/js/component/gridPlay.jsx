import React from "react";

const Boardgame = () => {
	return (
		<div className="boardgame">
			<h2>It is X turn!</h2>
			<button>Start Over</button>
			<div className="container text-center ">
				<div className="row">
					<div className="col"></div>
					<div className="col"></div>
					<div className="col"></div>
				</div>
				<div className="row">
					<div className="col"></div>
					<div className="col"></div>
					<div className="col"></div>
				</div>
				<div className="row">
					<div className="col"></div>
					<div className="col"></div>
					<div className="col"></div>
				</div>
			</div>
		</div>
	);
};

export default Boardgame;
