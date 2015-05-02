/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions');

var ProfileLocator = React.createClass({
    handleChange: function (event) {
        var username = event.target.value;

        this.setState({
            username: username
        });
    },

    handleSubmit: function (event) {
        event.preventDefault();

        AppActions.retrieveProfile(this.state.username);
    },

    render: function () {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input onChange={this.handleChange} type="text" className="form-control"
                           placeholder="Recipient's username"
                           aria-describedby="basic-addon2"/>
                    <span className="input-group-addon" id="basic-addon2">@github.com</span>
                </div>
            </form>
        );
    }
});

module.exports = ProfileLocator;
