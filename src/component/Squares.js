import { React } from 'react';

const Squares = ({ config: { SquareCount, top, left }, state: { space }}) =>
	Array(Math.sqrt(SquareCount)).fill(null)
		.map((el, ind) =>
			Array(Math.sqrt(SquareCount)).fill(null)
				.map((square, index) =>
					<div
						key={ index }
						className="square"
						style={ { top: `${ top + (space * ind) }px`, left: `${ left + (space * index) }px` } }
					/>));

export default Squares;
