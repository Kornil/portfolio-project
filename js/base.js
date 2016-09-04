var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var HelloMessage = React.createClass({
  render: function() {
    return (
    	<Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={8}>
		      	<p>Hello {this.props.name}</p>
		      </Col>
		      <Col xs={12} md={4} id="stats">
		      	<p>green</p>
		      </Col>
		    </Row>
		  </Grid>)
  }
});

ReactDOM.render(
  <HelloMessage name="Francesco" />,
  document.getElementById('wrapper')
);