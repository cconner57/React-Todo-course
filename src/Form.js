import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
	min-height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.todo-input {
		padding: 0.5rem;
		font-size: 2rem;
		border: none;
		background: white;
	}

	.todo-input:focus {
		outline: none;
	}

	.todo-button {
		padding: 0.5rem;
		font-size: 2rem;
		border: none;
		background: white;
		color: #ff6f47;
		background: #f7fffe;
		cursor: pointer;
	}

	.todo-button:hover {
		background: #ff6f47;
		color: white;
	}
`;

const SelectContainer = styled.div`
	margin: 1rem;
	position: relative;
	overflow: hidden;

	&::after {
		content: '\25BC';
		position: absolute;
		top: 0;
		right: 0;
		padding: 1rem;
		background: #ff6f47;
		cursor: pointer;
		pointer-events: none;
	}
`;

const Select = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	-ms-appearance: none;
	appearance: none;
	outline: 0;
	box-shadow: none;
	border: 0 !important;
	background-image: none;
	color: #ff6f47;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	width: 12rem;
`;

const Form = ({ addTodo }) => {
	return (
		<FormContainer>
			<input type='text' class='todo-input' />
			<button class='todo-button' type='submit' onClick={addTodo}>
				<i class='fas fa-plus-square'></i>
			</button>
			<SelectContainer class='select'>
				<Select name='todos' class='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</Select>
			</SelectContainer>
		</FormContainer>
	);
};

export default Form;
