import { React } from 'react';

const size = 50;
const width = `${ size }px`;
const height = `${ size }px`;
const left = 'calc(50vw)';
const top = 'calc(50vh)';

const Circle = () =>
	<div
		style={ { width, height, left, top } }
		className="circle"
	/>;

export default Circle;
