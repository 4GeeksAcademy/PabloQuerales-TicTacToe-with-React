import React, { useState, useEffect } from "react";
import PickMenu from "./pickMenu";

const BoardGame = (props) => {
	const [isSent, setIsSent] = useState(false);
	const [mainMenu, setMainMenu] = useState(false);
	const [player, setPlayer] = useState("It is X turn!");
	const [pickSelection, setPickSelection] = useState(props.o);
	const [validatorX, setValidatorX] = useState([]);
	const [validatorO, setValidatorO] = useState([]);
	const [color, setColor] = useState("");
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

	// Efecto para validar el ganador
	useEffect(() => {
		if (validatorX.length >= 3 || validatorO.length >= 3) {
			for (let i = 0; i < winCondition.length; i++) {
				const winSet = winCondition[i];
				if (winSet.every((item) => validatorX.includes(item))) {
					setPlayer("El ganador es X");
					setColor("winner-color");

					return;
				}
				if (winSet.every((item) => validatorO.includes(item))) {
					setPlayer("El ganador es O");
					return;
				}
			}
		}
	}, [validatorX, validatorO, winCondition]); // Solo ejecuta cuando cambian estos valores

	if (pickSelection) {
		setFirstPlayer("X");
	} else {
		setFirstPlayer("O");
	}
	const reset = () => {
		setIsSent(true);
	};

	const main = () => {
		setMainMenu(true);
	};

	const handleClick = (e) => {
		if ((player == `It is X turn!` || player == `It is O turn!`) && e.target.textContent === "") {
			if (pickSelection) {
				e.target.textContent = "X";
				setValidatorX([...validatorX, e.target.id]);
				setPickSelection(false);
				setPlayer("It is O turn!");
			} else {
				e.target.textContent = "O";
				setValidatorO([...validatorO, e.target.id]);
				setPickSelection(true);
				setPlayer("It is X turn!");
			}
		}
	};

	if (isSent) {
		return <BoardGame />;
	}
	if (mainMenu) {
		return <PickMenu />;
	}
	return (
		<div className="board-game">
			<h2 className={color}>{player}</h2>
			<button onClick={reset}>Start Over</button>
			<button onClick={main}>Main Menu</button>
			<div className="container text-center">
				<div className="row">
					<div id="0" className="col" onClick={handleClick}></div>
					<div id="1" className="col" onClick={handleClick}></div>
					<div id="2" className="col" onClick={handleClick}></div>
				</div>
				<div className="row">
					<div id="3" className="col" onClick={handleClick}></div>
					<div id="4" className="col" onClick={handleClick}></div>
					<div id="5" className="col" onClick={handleClick}></div>
				</div>
				<div className="row">
					<div id="6" className="col" onClick={handleClick}></div>
					<div id="7" className="col" onClick={handleClick}></div>
					<div id="8" className="col" onClick={handleClick}></div>
				</div>
			</div>
		</div>
	);
};

export default BoardGame;
