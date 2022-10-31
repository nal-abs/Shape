import { React } from 'react';
import Square from './Square';
import Circle from './Circle';

const ShapeComponent = {
	Square,
	Circle,
};

const DisplayShape = (context) => {
	const { state: { selectedShape }} = context;
	const SelectedShape = ShapeComponent[selectedShape];

	return <SelectedShape { ...context }/>;
};

export default DisplayShape;
