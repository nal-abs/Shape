import { map } from '@laufire/utils/collection';
import { React } from 'react';

const DropDown = (context) => {
	const { config: { shapes }, state: { selectedShape }} = context;

	return <div>
		<label>Choose a shape</label>
		<select
			name="Shapes"
			value={ selectedShape }
			onChange={ (evt) => context.actions.setShape(evt.target.value) }
		>
			{map(shapes, (shape) => <option key={ shape }value={ shape }>
				{shape}</option>)}
		</select></div>;
};

export default DropDown;
