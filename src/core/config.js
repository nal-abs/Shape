/* eslint-disable no-magic-numbers */

const config = {
	shapes: ['Square', 'Circle'],
	size: 11,
	colCount: 3,
	positions: [0, -11, -22, -33, -44].map((x) =>
		[0, -11, -22, -33].map((y) =>
			`${ x }vmin ${ y }vmin`)).flat(),
};

export default config;
