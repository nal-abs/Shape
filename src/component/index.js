import { map } from '@laufire/utils/collection';
import { React } from 'react';

const Inputs = (context) => {
	const { config: { shapes }, state: { selectedShape, space },
		actions } = context;

	return (
		<div>
			<label>Choose a shape</label>
			<input
				value={ space }
				onChange={ (evt) => actions.setSpace(evt.target.value) }
			/>
			<select
				name="Shapes"
				value={ selectedShape }
				onChange={ (evt) => actions.setShape(evt.target.value) }
			>
				{map(shapes, (shape) => <option key={ shape } value={ shape }>
					{shape}</option>)}
			</select></div>);
};

export default Inputs;
