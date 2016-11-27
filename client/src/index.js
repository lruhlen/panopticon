// Uncomment import statements after adding package management
// import React from 'react';
// import ReactDOM from 'react-dom';


const SERVER_ADDRESS = 'http://localhost:8000/bills/';
const ajax = new XMLHttpRequest();

class Bill extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
    return (
      <div>
        <span className='bill-name'>Bill: {this.props.display_name}</span>
        <span>&nbsp;</span>
        <span className='bill-id'>ID: {this.props.bill_id}</span>
      </div>
    );
	}
}

class Bills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bills = this.props.bills.map(
      function(bill) {
        return <div><Bill display_name={bill.display_name} bill_id={bill.id_num} key={bill.id_num} /><br /></div>;
      }
    );
    return <div>{bills}</div>;
  }
}


function renderResponse() {
  var jsx;

  if (ajax.readyState === XMLHttpRequest.DONE) {
    if (ajax.status === 200) {
      let json = JSON.parse(ajax.responseText);
      jsx = (<Bills bills={json.bills} />);
    } else {
      jsx = <div>Error response status {ajax.status}</div>;
    }
  } else {
    jsx = <div>Error readyState {ajax.readyState}</div>;
  }

  ReactDOM.render(jsx, document.getElementById('root'));
}

ajax.onreadystatechange = renderResponse;

function requestUpdate() {
  ajax.open('GET', SERVER_ADDRESS);
  ajax.send();
}

// setInterval(requestUpdate, 10000); // Perform requestUpdate every 10 seconds
requestUpdate(); // Update right now, so user need not wait 10 seconds for first mapdraw
