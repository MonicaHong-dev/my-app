import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function AddTodo({ onAdd }) {
	const [text, setText] = useState('');
	const handleInput = (e) => {
		setText(e.target.value);
	};

	const submitAdd = (e) => {
		e.preventDefault();
		if (text.trim().length === 0) {
			return;
		}
		onAdd({ id: uuidv4(), text, status: 'active' });
		setText('');
	};
	return (
		<div>
			<form onSubmit={submitAdd}>
				<input
					type='text'
					placeholder='enter todo'
					onChange={handleInput}
					value={text}
				/>
				<button>Add</button>
			</form>
		</div>
	);
}
