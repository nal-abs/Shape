import { map, range } from '@laufire/utils/collection';

const two = 2;
const half = 0.5;

const SquareManager = {
	generateSquare: ({ state: { space }, config: { colCount, size }}) =>
		map(range(0, colCount ** two), (number) => {
			const column = number % colCount;
			const row = (number - column) / colCount;
			const offset = ((colCount * size)
			+ ((colCount - 1) * space)) * half;

			return {
				id: number,
				style: {
					width: `${ size }px`,
					height: `${ size }px`,
					left: `calc(50vw + ${ (column * space) - offset }px)`,
					top: `calc(50vh + ${ (row * space) - offset }px`,

				},
			};
		}),
};

export default SquareManager;
