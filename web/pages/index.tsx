import React from 'react';
import styled from 'styled-components';
import { ExampleComponent } from 'shared';

const Title = styled.h1`
	color: red;
	font-size: 50px;
`;

export default function Home(): JSX.Element {
	return (
		<div>
			<ExampleComponent text="This example"></ExampleComponent>
			<Title>My page</Title>
		</div>
	);
}
