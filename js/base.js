var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
const statsText = [
{
	title: "HTML5",
	text: "HyperText Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. HTML elements are the building blocks of HTML pages. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML can embed programs written in a scripting language such as JavaScript which affect the behavior and content of web pages. Inclusion of CSS defines the look and layout of content.",
	icon: "devicon-html5-plain"
},{
	title: "CSS3",
	text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications. Changes to the graphic design of a document (or hundreds of documents) can be applied quickly and easily, by editing a few lines in the CSS file they use, rather than by changing markup in the documents.",
	icon: "devicon-css3-plain"
},{
	title: "JavaScript",
	text: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. Alongside HTML and CSS, it is one of the three core technologies of World Wide Web content production; the majority of websites employ it and it is supported by all modern Web browsers without plug-ins. JavaScript has been traditionally implemented as an interpreted language, but more recent browsers perform just-in-time compilation. It is also used in game development, the creation of desktop and mobile applications, and server-side network programming with run-time environments such as Node.js.",
	icon: "devicon-javascript-plain"
},{
	title: "jQuery",
	text: "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library.  The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications.",
	icon: "devicon-jquery-plain"
},{
	title: "Bootstrap",
	text: "Bootstrap is a free and open-source front-end web framework for designing websites and web applications developed by Mark Otto and Jacob Thornton at Twitter. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only. Bootstrap is the second most-starred project on GitHub, with almost 100,000 stars and almost 45,000 forks.",
	icon: "devicon-bootstrap-plain"
},{
	title: "React.js",
	text: "React is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags. It is maintained by Facebook, Instagram and a community of individual developers and corporations. React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, and others. As of March 2016, React and React Native are Facebook's top two open-source projects by number of stars on GitHub, and React is the 6th most starred project of all time on GitHub.",
	icon: "devicon-react-original"
},{
	title: "D3.js",
	text: "D3.js (or just D3 for Data-Driven Documents) is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards. In contrast to many other libraries, D3.js allows great control over the final visual result. Large datasets can be easily bound to SVG objects using simple D3.js functions to generate rich text/graphic charts and diagrams. The data can be in various formats, most commonly JSON, comma-separated values (CSV) or geoJSON, but, if required, JavaScript functions can be written to read other data formats.",
	icon: "devicon-d3js-plain"
}];

var Stats = React.createClass({
	render: function(){
		let number = this.props.test;
		return (
			<Col xs={12} md={3} id="stats">
      	<div id="circle"></div>
      	<h3>{statsText[number].title}</h3>
      	<p>{statsText[number].text}</p>
      </Col>
			)
	}
});

var FinalRender = React.createClass({
	getInitialState: function() {
    return {test: 0};
  },
	handleClick: function() {
		if(this.state.test===0){
    	this.setState({test: 1});
    }else{
    	this.setState({test: 0});
    }
  },
  hoverEvent: function(i){
  	this.setstate({test: i})
  },
  render: function() {
    return (
    	<Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={9} id="bg">
		      	<h1 onClick={this.handleClick}>Francesco Agnoletto</h1>
		      	<div id="icons">
		      		{statsText.map(function(object, i){
				        return <i onMouseOver={()=>this.hoverEvent(i)} className={object.icon} key={i} height="45px" />;
				    	})}
		      	</div>
		      </Col>
		      <Stats test={this.state.test}/>
		    </Row>
		  </Grid>)
  }
});

ReactDOM.render(
  <FinalRender />,
  document.getElementById('wrapper')
);