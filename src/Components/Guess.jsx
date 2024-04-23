import React from "react";

const Guess = ({ guess }) => {
	return (
		<>
			<p className="guess">
				{guess.split("").map((letter, index) => (
					<span key={index}>{letter}</span>
				))}
			</p>
		</>
	);
};

export default Guess;
