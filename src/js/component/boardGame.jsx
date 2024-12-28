import React from "react";
import { useState } from "react";
import WinModal from "./winModal";
const BoardGame = () => {
	const [isSent, setIsSent] = useState(false);
	const [pickSelection, setPickSelection] = useState(true);
	const [validatorX, setValidatorX] = useState([]);
	const [validatorO, setValidatorO] = useState([]);
	const [winCondition, setWinCondition] = useState([
		["0", "1", "2"],
		["3", "4", "5"],
		["6", "7", "8"],
		["0", "3", "6"],
		["1", "4", "7"],
		["2", "5", "8"],
		["0", "4", "8"],
		["2", "4", "6"]
	]);
	if (isSent) {
		return <BoardGame />;
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
	let winModal = () => {
		return <WinModal />;
	};

	if (validatorX.length >= 3 || validatorO >= 3) {
		winCondition.forEach((e) => {
			let equalX = e.every((item) => validatorX.includes(item));
			let equalO = e.every((item) => validatorO.includes(item));
			if (equalX) {
				alert("Gana X");
			}
			if (equalO) {
				alert("Gana O");
			}
		});
	}
	return (
		<div className="BoardGame">
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

export default BoardGame;
