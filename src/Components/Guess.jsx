import React from "react";
import { range } from "../utils";

const Guess = ({ guess }) => {
	return (
		<>
			<p className>
				{range(5).map((num) => (
					<span key={num}>{guess ? guess[num] : undefined}</span>
				))}
			</p>
		</>
	);
};

export default Guess;
