import { map, range } from '@laufire/utils/collection';
import { React } from 'react';

const size = 50;
const colCount = 3;
const two = 2;
const Box = ({ id, style }) =>
	<div
		key={ id }
		style={ style }
		className="square"
	/>;

const Boxes = (context) => {
	const { state: { space }} = context;

	return map(range(0, colCount ** two), (number) => {
		const column = number % colCount;
		const half = 0.5;
		const row = (number - column) / colCount;
		const offset = ((colCount * size) + ((colCount - 1) * space)) * half;

		return {
			id: number,
			style: {
				width: `${ size }px`,
				height: `${ size }px`,
				left: `calc(50vw + ${ (column * space) - offset }px)`,
				top: `calc(50vh + ${ (row * space) - offset }px`,
			},
		};
	});
};

const Square = (context) =>
	<div className="App" role="App">
		{map(Boxes(context), Box)}
	</div>;

export default Square;
