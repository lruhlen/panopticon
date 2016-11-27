//const Grid = ReactBootstrap.Grid;
//const Row = ReactBootstrap.Row;
//const Col = ReactBootstrap.Col;
const {Grid, Row, Col} = ReactBootstrap;
import {Bills} from 'bills.js';

export class Page extends React.Component {
    constructor(props) {
	super(props);
    }
    render() {
	return (
	    <Grid>
		<Row className="show-grid">
		<Col md={12}>"Let's pretend this is the page header!"</Col>	
		</Row>
		<Bills bills={this.props.json.bills} />
	    </Grid>
	);
	
    }
}
//	jsx = ( <Bills bills={json.bills} />);
/*
const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
    </Row>

    <Row className="show-grid">
      <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
      <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
    </Row>
  </Grid>
);

ReactDOM.render(gridInstance, mountNode);
*/
