/* eslint-disable react/prop-types */
import React from "react";

const Input = ({ value, onSubmit, onChange }) => {
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="guess">Enter your guess</label>
			<br />
			<input type="text" name="guess" id="guess" value={value} onChange={onChange} />
		</form>
	);
};

export default Input;
