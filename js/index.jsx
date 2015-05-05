window.$ = require('jquery');
window.jQuery = $;
require("../index.html");
require("../css/main.css");

var React = require('react'),
    Root = require('./views/root.jsx');

React.render(
    <Root />,
    document.getElementById('root')
);