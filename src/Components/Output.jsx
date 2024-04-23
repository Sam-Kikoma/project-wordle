import React from "react";
import Guess from "./Guess";

const Output = ({ guesses }) => {
	return (
		<>
			{guesses.map((guess, index) => (
				<Guess key={index} guess={guess} />
			))}
		</>
	);
};

export default Output;
