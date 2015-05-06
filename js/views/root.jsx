var React = require('react'),
    ModuleInput = require('./moduleInput.jsx'),
    ModuleTable = require('./moduleTable.jsx');

module.exports = React.createClass({
    render: function() {
        return <div>
            <img src={ require('../../demo.gif') } />
            <ModuleInput />
            <ModuleTable modules={ [] }/>
        </div>
    }
});