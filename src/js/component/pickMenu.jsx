import React from "react";

const PickMenu = () => {
	return (
		<>
			<h2>Pick A Weapon</h2>
			<div>
				<h3>CHOOSE YOUR WEAPON</h3>
				<div>
					<input type="text" placeholder="Player1" />
					<input type="text" placeholder="Player2" />
				</div>
				<div>
					<button>X</button>
					<button>O</button>
				</div>
			</div>
		</>
	);
};

export default PickMenu;
