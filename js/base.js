var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
const statsText = [
{
	title: "About me",
	text: "Francesco Agnoletto, self-taught Front-end developer from Italy. I work with HTML, CSS and JavaScript to make beautiful, optimized and search engine friendly websites. You can find my latest works on the left.",
	image: ""
},{
	title: "HTML5",
	text: "HyperText Markup Language is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS), and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. HTML elements are the building blocks of HTML pages. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML can embed programs written in a scripting language such as JavaScript which affect the behavior and content of web pages. Inclusion of CSS defines the look and layout of content.",
	icon: "devicon-html5-plain",
	image: '<svg viewBox="0 0 128 128"> <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z"></path><path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path> </svg>'
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
		let n = this.props.test;
		return (
			<Col xs={12} md={3} id="stats">
      	<div id="circle">{$("#stats").html(statsText[n].image)}</div>
      	<h3>{statsText[n].title}</h3>
      	<p>{statsText[n].text}</p>
      </Col>
			)
	}
});

var FinalRender = React.createClass({
	getInitialState: function() {
    return {test: 0};
  },
	handleHover: function(i) {
    	this.setState({test: i});
  },
  render: function() {
    return (
    	<Grid>
		    <Row className="show-grid">
		      <Col xs={12} md={9} id="bg">
		      	<h1>Francesco Agnoletto</h1>
		      	<div id="icons">
		      		{statsText.map(function(object, i){
				        return <i onMouseOver={this.handleHover.bind(this, i)} onMouseOut={this.handleHover.bind(this, 0)} className={object.icon} key={i} height="45px" />;
				    	}.bind(this))}
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