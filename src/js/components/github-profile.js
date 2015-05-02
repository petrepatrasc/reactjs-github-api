/** @jsx React.DOM */
var React = require('react');
var GitHubProfileInfo = require('./github-profile-info');
var GitHubRepos = require('./github-repos');

var GitHubProfile = React.createClass({
    render: function () {
        return (
            <div className="profile-component">
                <GitHubProfileInfo username={this.props.username} />
                <GitHubRepos username={this.props.username} />
            </div>
        );
    }
});

module.exports = GitHubProfile;
