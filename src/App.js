import { map, range } from '@laufire/utils/collection';
import { React } from 'react';
import './App.scss';

const margin = 100;
const size = 50;
const colCount = 3;
const two = 2;
const Box = ({ id, style }) =>
	<div
		key={ id }
		style={ style }
		className="square"
	/>;

const Boxes = map(range(0, colCount ** two), (number) => {
	const column = number % colCount;
	const half = 0.5;
	const row = (number - column) / colCount;
	const offset = ((colCount * size) + ((colCount - 1) * margin)) * half;

	return {
		id: number,
		style: {
			width: `${ size }px`,
			height: `${ size }px`,
			left: `calc(50vw + ${ (column * margin) - offset }px)`,
			top: `calc(50vh + ${ (row * margin) - offset }px`,
		},
	};
});

const App = () =>
	<div className="App" role="App">
		{map(Boxes, Box)}
	</div>;

export default App;
