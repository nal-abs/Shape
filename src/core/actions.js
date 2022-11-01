const actions = {
	setShape: (context) => ({
		selectedShape: context.data,
	}),
	setSpace: (context) => ({
		space: context.data,
	}),
};

export default actions;
