// Input.js
import { useState } from "react";

const Input = ({ onSubmit }) => {
	const [guess, setGuess] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(guess);
		setGuess("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="guess">Enter your guess</label>
			<br />
			<input
				type="text"
				name="guess"
				id="guess"
				value={guess}
				onChange={(event) => setGuess(event.target.value.toUpperCase())}
				required
				minLength={5}
				maxLength={5}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Input;
