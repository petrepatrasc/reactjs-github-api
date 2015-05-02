/** @jsx React.DOM */
var React = require('react');
var ProfileStore = require('../stores/profile-store');

var GitHubProfileInfo = React.createClass({
    getInitialState: function () {
        return {
            "profile": ProfileStore.getProfileInfo(this.props.username)
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
            profile: ProfileStore.getProfileInfo(ProfileStore.getUsername())
        })
    },

    render: function () {
        var username = <div className="profile-info-username">{this.state.profile.login}</div>;
        var avatar = <img className="profile-info-avatar" src={this.state.profile.avatar_url}/>;
        var name = <div className="profile-info-fullname">{this.state.profile.name}</div>;
        var company = <div className="profile-info-company">{this.state.profile.company}</div>;
        var location = <div className="profile-info-location">{this.state.profile.location}</div>;

        return (
            <div className="profile-info-component">
                {avatar}
                {name}
                {username}
                {company}
                {location}
            </div>
        );
    }
});

module.exports = GitHubProfileInfo
