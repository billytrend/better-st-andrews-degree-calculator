var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <tr>
            <td>{ this.props.module.code }</td>
            <td>{ this.props.module.name }</td>
            <td>{ this.props.module.score }</td>
            <td>{ this.props.module.possible }</td>
        </tr>
    }
});