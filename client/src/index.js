// Uncomment import statements after adding package management
// import React from 'react';
// import ReactDOM from 'react-dom';

// class OneBigViewPort extends React.Component {
// 	render() {
// 		return <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">{this.props.children}</svg>;
// 	}
// }

function OneBigViewPort(props) {
	return <svg width="100%" height="100%" viewBox="0 0 100 100">{props.children}</svg>;
}

function MyRect(props) {
	if (props.count > 5){
		return null;
	}

	let red = props.count * 20;
	let green = 250 - (props.count * 20);
	let blue = 128 - (props.count * 20);
	let color =	`rgb(${red}, ${green}, ${blue})`;
	return (
		<g transform>
			<rect x={props.count * 5} y={props.count * 5} width={50 - props.count * 10} height={50 - props.count * 10} fill={color} />
			<MyRect count={props.count + 1}/>
		</g>
	);
}

class Hello extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}



ReactDOM.render(<OneBigViewPort><MyRect count={1} /></OneBigViewPort>, document.getElementById('root'));
