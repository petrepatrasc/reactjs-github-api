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
            'displayClass': 'profile-visible'
        });
    },

    getInitialState: function () {
        return {
            displayClass: 'profile-hidden'
        }
    },
    render: function () {
        return (
            <div className={this.state.displayClass + " profile-component"}>
                <GitHubProfileInfo username={this.props.username}/>
                <GitHubRepos username={this.props.username}/>
                <GitHubOrganisations username={this.props.username}/>
            </div>
        );
    }
});

module.exports = GitHubProfile;
