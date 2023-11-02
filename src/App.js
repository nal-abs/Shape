import { React } from 'react';
import './App.scss';
import Inputs from './component';
import DisplayShape from './component/DisplayShape';

const App = (context) => <div className="App" role="App">
	<div className="background"><Inputs { ...context }/>
		<DisplayShape { ...context }/>
	</div>
</div>;

export default App;
