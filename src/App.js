import React from 'react';
import styled from 'styled-components';
import './App.css';

import Form from './Form'
import ListContainer from './ListContainer'

const Body = styled.div`
	background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
	color: white;
	font-family: 'Poppins', sans-serif;
	min-height: 100vh;
`;

const Header = styled.header`
	font-size: 2rem;
	min-height: 20vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const addTodo = e => {
	e.preventDefault();
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	const newTodo = document.createElement('li');
	newTodo.innerText = document.querySelector('.todo-input').value;
	// saveLocalTodos(todoInput.value);
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	document.querySelector('.todo-input').value = '';
	const completedButton = document.createElement('button');
	completedButton.innerHTML = `<i class="fas fa-check"></i>`;
	completedButton.classList.add('complete-btn');
	todoDiv.appendChild(completedButton);
	const trashButton = document.createElement('button');
	trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
	trashButton.classList.add('trash-btn');
	todoDiv.appendChild(trashButton);
	document.querySelector('.todo-list').appendChild(todoDiv);
}

const deleteTodo = e => {
	const item = e.target;

	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		todo.classList.add('fall');
		removeLocalTodos(todo);
		todo.addEventListener('transitionend', (e) => {
			todo.remove();
		});
	}
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}

const filterTodo = e => {
	const todos = document.querySelector('.todo-list').childNodes;
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case 'uncompleted':
				if (!todo.classList.contains('completed')) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
                }
                break
		}
	});
}

const saveLocalTodos = todo => {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

const removeLocalTodos = todo => {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach(function (todo) {
		const todoDiv = document.createElement('div');
		todoDiv.classList.add('todo');

		const newTodo = document.createElement('li');
		newTodo.innerText = todo;
		newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);
		document.querySelector('.todo-input').value = '';

		const completedButton = document.createElement('button');
		completedButton.innerHTML = `<i class="fas fa-check"></i>`;
		completedButton.classList.add('complete-btn');
		todoDiv.appendChild(completedButton);

		const trashButton = document.createElement('button');
		trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
		trashButton.classList.add('trash-btn');
		todoDiv.appendChild(trashButton);
		document.querySelector('.todo-list').appendChild(todoDiv);
	});
}

function App() {
	return (
		<Body>
			<Header>
				<h1>To-Do List</h1>
			</Header>
			<Form addTodo={addTodo} />
			<ListContainer/>
		</Body>
	);
}

export default App;
