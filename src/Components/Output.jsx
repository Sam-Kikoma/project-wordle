import React from "react";
import Guess from "./Guess";
import { range } from "../utils";

const Output = ({ guesses }) => {
	return (
		<>
			{range(6).map((num) => (
				<Guess key={num} guess={guesses[num]} />
			))}
		</>
	);
};

export default Output;
