import React from "react";
import { useState } from "react";

const Boardgame = () => {
	const [isSent, setIsSent] = useState(false);
	const [pickSelection, setPickSelection] = useState(true);
	const [validatorX, setValidatorX] = useState([]);
	const [validatorO, setValidatorO] = useState([]);
	const [winCondition, setWinCondition] = useState(["0", "1", "2"]);

	if (isSent) {
		return <Boardgame />;
	}
	const reset = () => {
		setIsSent(true);
	};
	const handleClick = (e) => {
		if (pickSelection) {
			if (e.target.textContent == "") {
				e.target.textContent = "X";
				setValidatorX([...validatorX, e.target.id]);
				setPickSelection(false);
			}
		} else {
			if (e.target.textContent == "") {
				e.target.textContent = "O";
				setValidatorO([...validatorO, e.target.id]);
				setPickSelection(true);
			}
		}
	};

	if (validatorX.length >= 3) {
		if (validatorX == winCondition) {
			console.log("Ganaste");
		}
	} else {
		console.log("perdiste");
	}
	console.log(validatorX);
	// [{1:0,1,2},{2:3,4,5},{3:6,7,8},{4:0,3,6},{5:1,4,7},{6:2,5,8},{7:0,4,8},{8:2,4,6}]
	// VALIDADOR DE X
	// VALIDADOR DE O

	return (
		<div className="boardgame">
			<h2>It is x turn!</h2>
			<button onClick={reset}>Start Over</button>
			<div className="container text-center">
				<div className="row" onClick={handleClick}>
					<div id="0" className="col"></div>
					<div id="1" className="col"></div>
					<div id="2" className="col"></div>
				</div>
				<div className="row" onClick={handleClick}>
					<div id="3" className="col"></div>
					<div id="4" className="col"></div>
					<div id="5" className="col"></div>
				</div>
				<div className="row" onClick={handleClick}>
					<div id="6" className="col"></div>
					<div id="7" className="col"></div>
					<div id="8" className="col"></div>
				</div>
			</div>
		</div>
	);
};

export default Boardgame;
