/** @jsx React.DOM */
var React = require('react');
var GitHubProfileInfo = require('./github-profile-info');
var GitHubRepos = require('./github-repos');
var GitHubOrganisations = require('./github-organisations');
var ProfileStore = require('../stores/profile-store');

var GitHubProfile = React.createClass({
    componentDidMount: function () {
        ProfileStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProfileStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            displayClass: 'profile-visible',
            username: ProfileStore.getUsername()
        });
    },

    getInitialState: function () {
        return {
            displayClass: 'profile-hidden',
            username: this.props.username
        }
    },

    render: function () {
        return (
            <div className={this.state.displayClass + " profile-component"}>
                <GitHubProfileInfo username={this.state.username}/>
                <GitHubRepos username={this.state.username}/>
                <GitHubOrganisations username={this.state.username}/>
            </div>
        );
    }
});

module.exports = GitHubProfile;
