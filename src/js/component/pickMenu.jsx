import React from "react";
import { useState } from "react";
import BoardGame from "./boardGame";

const PickMenu = () => {
	const [isSentX, setIsSentX] = useState(false);
	const [isSentO, setIsSentO] = useState(true);
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");

	if (isSentX) {
		return <BoardGame x={isSentX} o={isSentO} />;
	}
	const handleClickX = () => {
		if (player1 != "" && player2 != "") {
			setIsSentX(true);
		}
	};
	if (!isSentO) {
		return <BoardGame player1={player1} player2={player2} />;
	}
	const handleClickO = () => {
		if (player1 != "" && player2 != "") {
			setIsSentO(false);
		}
	};
	const onChangePlayer1 = (e) => {
		if (e.target.value != player1) {
			setPlayer1(e.target.value);
			console.log(player1);
		}
	};
	const onChangePlayer2 = (e) => {
		if (e.target.value != player2) {
			setPlayer2(e.target.value);
			console.log(player2);
		}
	};
	return (
		<div className="container-players">
			<h2>Pick A Weapon</h2>
			<div>
				<h3>CHOOSE YOUR WEAPON</h3>
				<div className="input-players">
					<input type="text" placeholder="Player1" onChange={onChangePlayer1} />
					<input type="text" placeholder="Player2" onChange={onChangePlayer2} />
				</div>
				<div className="button-player">
					<button onClick={handleClickX}>X</button>
					<button onClick={handleClickO}>O</button>
				</div>
			</div>
		</div>
	);
};

export default PickMenu;
