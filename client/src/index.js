//# src/index.js
import {Page} from 'page.js';

const SERVER_ADDRESS = 'http://localhost:8000/bills/';
const ajax = new XMLHttpRequest();

function renderResponse() {
  var jsx;

  if (ajax.readyState === XMLHttpRequest.DONE) {
    if (ajax.status === 200) {
      let json = JSON.parse(ajax.responseText);
	jsx = (<Page json={json} /> );
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
