import React from "react";
import { useState } from "react";
import BoardGame from "./boardGame";
import WinModal from "./winModal";

const PickMenu = () => {
	const [isSent, setIsSent] = useState(false);
	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");

	if (isSent) {
		return <BoardGame />;
	}
	const handleClick = () => {
		setIsSent(true);
	};
	const onChange = (e) => {
		if (e.target.placeholder == player1) {
			setPlayer1(e.target.value);
			console.log(player1);
		} else {
			setPlayer2(e.target.value);
			console.log(player2);
		}
	};
	return (
		<>
			<h2>Pick A Weapon</h2>
			<div>
				<h3>CHOOSE YOUR WEAPON</h3>
				<div>
					<input type="text" placeholder="Player1" onChange={onChange} />
					<input type="text" placeholder="Player2" onChange={onChange} />
				</div>
				<div>
					<button onClick={handleClick}>X</button>
					<button>O</button>
				</div>
			</div>
		</>
	);
};

export default PickMenu;
