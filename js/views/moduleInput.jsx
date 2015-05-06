var React = require('react'),
    State = require('../state');

module.exports = React.createClass({
    _setModules: function(event) {
        State.setModules(event.target.value);
    },

    render: function() {
        return <textarea onChange={ this._setModules } placeholder="Copy and paste results from isaint to this text box">

        </textarea>
    }
});