import { map, range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';

const two = 2;
const half = 0.5;

const SquareManager = {
	generateSquare: ({ state: { space },
		config: { colCount, size, positions }}) =>
		map(range(0, colCount ** two), (number) => {
			const column = number % colCount;
			const row = (number - column) / colCount;
			const offset = ((colCount * size)
			+ ((colCount - 1) * space)) * half;

			return {
				id: number,
				style: {
					width: `${ size }vmin`,
					height: `${ size }vmin`,
					left: `calc(50vw + ${ (column * space) - offset }px)`,
					top: `calc(50vh + ${ (row * space) - offset }px`,
					backgroundPosition:
					positions[rndBetween(0, positions.length - 1)],
				},
			};
		}),
};

export default SquareManager;
