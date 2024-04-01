import React from 'react';

const Index = () => {

	React.useEffect(() => {
		console.log('hello world');
		alert('hello world');
	}, [])

	return (
		<div>
			<h1>Index</h1>
		</div>
	)
}


export default Index;