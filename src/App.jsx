// App.js
import React, { useState } from "react";
import Input from "./Components/Input";
import Guess from "./Components/Guess";
import Output from "./Components/Output";
import "./index.css";

function App() {
	const [guesses, setGuesses] = useState([]);

	const onSubmit = (guess) => {
		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);
	};

	return (
		<>
			<h1>Word Game</h1>
			<Input onSubmit={onSubmit} />
			<Output guesses={guesses} />
		</>
	);
}

export default App;
