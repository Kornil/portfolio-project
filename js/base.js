var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var HelloMessage = React.createClass({
  render: function() {
    return (
    	<Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={9} id="bg">
		      	<h1>{this.props.name} Agnoletto</h1>
		      </Col>
		      <Col xs={12} md={3} id="stats">
		      	<div id="circle"></div>
		      	<h3>title</h3>
		      	<p>{text}</p>
		      </Col>
		    </Row>
		  </Grid>)
  }
});

ReactDOM.render(
  <HelloMessage name="Francesco" />,
  document.getElementById('wrapper')
);