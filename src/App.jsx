import Input from "./Components/Input";
import { useState } from "react";

function App() {
	const [guess, setGuess] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(guess);
		setGuess("");
	};

	const onChange = (event) => {
		event.target.value.toUpperCase();
		setGuess(event.target.value);
	};

	return (
		<>
			<h1>Word Game</h1>
			<Input value={guess} onSubmit={onSubmit} onChange={onChange} />
		</>
	);
}

export default App;
