var HelloMessage = React.createClass({
          render: function() {
            return (<div>
                        <h1>Hello {this.props.name}</h1>
                    </div>)
          }
        });

        ReactDOM.render(
          <HelloMessage name="Francesco" />,
          document.getElementById('container')
        );