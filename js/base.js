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