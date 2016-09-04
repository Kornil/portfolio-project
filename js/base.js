var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;


var HelloMessage = React.createClass({
  render: function() {
    return (
    	<Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={8}>
		      	<code>Hello {this.props.name}</code>
		      </Col>
		      <Col xs={12} md={4}>
		      	<code>green</code>
		      </Col>
		    </Row>
		  </Grid>)
  }
});

ReactDOM.render(
  <HelloMessage name="Francesco" />,
  document.getElementById('wrapper')
);