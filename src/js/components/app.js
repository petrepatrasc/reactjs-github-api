/** @jsx React.DOM */
var React = require('react');
var ProfileLocator = require('./profile-locator');
var GitHubProfile = require('./github-profile');

var App = React.createClass({
    render: function() {
        return (
            <div id="profile-form-component">
                <h1>GitHub Profile Viewer</h1>
                <p>Enter a GitHub username below and relevant information regarding the account will be displayed.</p>

                <ProfileLocator username="petrepatrasc" />
                <hr/>
                <GitHubProfile username="petrepatrasc" />
            </div>
        );
    }
});

module.exports = App;
