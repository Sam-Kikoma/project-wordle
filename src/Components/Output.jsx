import React, { useState } from "react";
import Guess from "./Guess";
import { range } from "../utils";
import { answerGen, answers } from "../answers";

const Output = ({ guesses }) => {
	const [answer, setAnswer] = useState(answerGen(answers));

	console.log(answer);
	return (
		<>
			{range(6).map((num) => (
				<Guess key={num} guess={guesses[num]} answer={answer} />
			))}
		</>
	);
};

export default Output;
