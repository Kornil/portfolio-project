var HelloMessage = React.createClass({
  render: function() {
    return 
    <div>
	    <div id="container">
	      Hello {this.props.name}
	    </div>
    </div>
  }
});

ReactDOM.render(
  <HelloMessage name="Francesco" />,
  document.getElementById('wrapper')
);