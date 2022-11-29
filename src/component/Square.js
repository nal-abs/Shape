import { map } from '@laufire/utils/collection';
import { React } from 'react';
import SquareManager from '../service/SquareManager';

const Box = ({ id, style }) =>
	<div
		key={ id }
		style={ style }
		className="square"
	/>;

const Boxes = (context) => SquareManager.generateSquare(context);

const Square = (context) =>
	<div className="App" role="App">
		{map(Boxes(context), Box)}
	</div>;

export default Square;
