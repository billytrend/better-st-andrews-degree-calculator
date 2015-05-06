var React = require('react'),
    ModuleView = require('./moduleView.jsx'),
    State = require('../state'),
    Algo = require('../algo');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            years: []
        };
    },

    componentDidMount: function() {
        console.log("attached")
        State.on("modules_update", this._refreshState);
    },

    _refreshState: function() {
        console.log("hi")
        this.setState({
            years: State.modules
        });
    },

    render: function() {
        return <table>
            {
                this.state.years.map(function(modules) {
                    var stat = Algo.stat(modules.modules);
                    return <div>
                        <div><b>credits earned: </b>{ stat.earned } out of { stat.possible }</div>
                        <div><b>mean score: </b>{ stat.mean }</div>
                        <table>
                            {
                                modules.modules.map(function(module) {
                                    return <ModuleView module={ module } />
                                })
                            }
                        </table>
                        <hr />
                    </div>
                })
            }
        </table>
    }
});