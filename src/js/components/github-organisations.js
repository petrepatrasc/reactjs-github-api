var React = require('react');
var ProfileStore = require('../stores/profile-store');

var GitHubOrganisations = React.createClass({
    getInitialState: function () {
        return {
            organisations: ProfileStore.getProfileOrganisations(this.props.username)
        }
    },

    componentDidMount: function () {
        ProfileStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProfileStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            organisations: ProfileStore.getProfileOrganisations(ProfileStore.getUsername())
        })
    },

    render: function () {
        var organisations = this.state.organisations.map(function (organisation) {
            return (
                <div className="profile-org-entry">
                    <a target="_blank" href={"http://github.com/" + organisation.login}>
                        <img src={organisation.avatar_url} className="profile-org-avatar"/>
                        <span className="profile-org-name">{organisation.login}</span>
                    </a>
                </div>
            )
        });

        return (
            <div className="profile-org-component">
                <h3>Organisations</h3>
                {organisations}
            </div>
        );
    }
});

module.exports = GitHubOrganisations;
