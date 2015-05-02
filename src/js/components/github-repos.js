/** @jsx React.DOM */
var React = require('react');
var ProfileStore = require('../stores/profile-store');

var GitHubRepos = React.createClass({
    getInitialState: function() {
        return {
            repositories: ProfileStore.getProfileRepos(this.props.username)
        }
    },

    componentDidMount: function(){
        ProfileStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        ProfileStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState({
            repositories: ProfileStore.getProfileRepos(ProfileStore.getUsername())
        })
    },

    render: function () {
        var repositories = this.state.repositories.map(function(repository, index) {
            return <span key={index} className="profile-repos-entry">
                <a href={repository.html_url} target="_blank" className="profile-repos-detail">{repository.full_name}</a>
            </span>
        });

        return (
            <div className="profile-repos-component">
                <h3>Public Repositories</h3>
                {repositories}
            </div>
        );
    }
});

module.exports = GitHubRepos;
