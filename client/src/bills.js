//# src/bills.js
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

export class Bills extends React.Component {
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
