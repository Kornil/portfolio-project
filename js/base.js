var HelloMessage = React.createClass({
  render: function() {
    return (
    	<Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={8}>Hello {this.props.name}</Col>
		      <Col xs={12} md={4}>Im green</Col>
		    </Row>
		  </Grid>
        <div>
    	    <div id="container">
    	      Hello {this.props.name}
    	    </div>
        </div>)
  }
});

ReactDOM.render(
  <HelloMessage name="Francesco" />,
  document.getElementById('wrapper')
);