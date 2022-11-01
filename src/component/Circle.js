import { map, range } from '@laufire/utils/collection';
import { React } from 'react';

const nine = 9;
const height = 300;
const width = 900;
const size = 50;
const oneEighty = 180;
const angle = 360;

const circles = (context) => {
	const { state: { space }} = context;

	return map(range(0, nine), (number) => {
		const radian = number * (angle / nine) * Math.PI / oneEighty;
		const y = Math.sin(radian) * space;
		const x = Math.cos(radian) * space;

		return {
			id: number,
			style: {
				width: `${ size }px`,
				height: `${ size }px`,
				top: `${ height + y }px`,
				left: `${ width + x }px`,
			},
		};
	});
};

const circle = ({ id, style }) =>
	<div key={ id } style={ style } className="circle"/>;

const Circle = (context) =>
	<div>{map(circles(context), circle)}</div>;

export default Circle;
