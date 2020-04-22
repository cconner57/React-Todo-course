import React from 'react';
import styled from 'styled-components';

const List = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ListItem = styled.ul`
	min-width: 30%;
	list-style: none;
`;

const ListContainer = () => {
	return (
		<List class='todo-container'>
			<ListItem class='todo-list'></ListItem>
		</List>
	);
};

export default ListContainer;
