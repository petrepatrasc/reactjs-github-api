/** @jsx React.DOM */
var React = require('react');
var ProfileLocator = require('./profile-locator');
var ProfileDisplay = require('./profile-display');

var App = React.createClass({
    render: function() {
        return (
            <div id="profile-form-component">
                <h1>GitHub Profile Viewer</h1>
                <p>Just enter a name below and the information will be displayed.</p>

                <ProfileLocator />
                <hr/>
                <ProfileDisplay />
            </div>
        );
    }
});

module.exports = App;
