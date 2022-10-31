import { React } from 'react';
import './App.scss';
import DropDown from './component';
import DisplayShape from './component/DisplayShape';

const App = (context) => {
	// eslint-disable-next-line no-console
	console.log(context);
	return <div className="App" role="App">
		<DropDown { ...context }/>
		<DisplayShape { ...context }/>
	</div>;
};

export default App;
