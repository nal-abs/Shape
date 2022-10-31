import { map, range } from '@laufire/utils/collection';
import { React } from 'react';
const nine = 9;
const height = 300;
const width = 900;
const divider = 40;
const oneEighty = 180;
const radius = 100;

const circles = map(range(0, nine), (number) => {
	const radian = number * divider * Math.PI / oneEighty;
	const y = Math.sin(radian) * radius;
	const x = Math.cos(radian) * radius;

	return {
		id: number,
		style: {
			width: '50px',
			height: '50px',
			top: `${ height + y }px`,
			left: `${ width + x }px`,
		},
	};
});

const circle = ({ id, style }) =>
	<div key={ id } style={ style } className="circle"/>;

const Circle = () =>
	<div>{map(circles, circle)}</div>;

export default Circle;
