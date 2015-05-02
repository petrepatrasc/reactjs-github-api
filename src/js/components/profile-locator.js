/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-store');

var ProfileLocator = React.createClass({
    getInitialState: function() {
        return {
            username: AppStore.getUsername()
        };
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState({
            username: AppStore.getUsername()
        })
    },

    handleChange: function(event) {
        var username = event.target.value;

        this.setState({
            username: username
        });
    },

    handleSubmit: function(event) {
        event.preventDefault();

        var username = this.state.username;
        AppActions.retrieveProfile(username);
    },

    render: function () {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input value={this.state.username} onChange={this.handleChange} type="text" className="form-control" placeholder="Recipient's username"
                           aria-describedby="basic-addon2"/>
                    <span className="input-group-addon" id="basic-addon2">@github.com</span>
                </div>
            </form>
        );
    }
});

module.exports = ProfileLocator;
