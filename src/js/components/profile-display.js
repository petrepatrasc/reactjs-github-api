/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store');

var ProfileDisplay = React.createClass({
    getInitialState: function () {
        return {
            display: AppStore.getProfileDisplay(),
            profile: {
                'name': 'undefined',
                'avatar_url': 'http://www.surfplanet.it/ecomerce/images/no-image-large.png'
            }
        }
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState({
            display: AppStore.getProfileDisplay(),
            profile: AppStore.getProfile()
        })
    },

    render: function () {
        return (
            <div className={this.state.display + ' profile-component'}>
                <h2 className="profile-name">{this.state.profile.name}</h2>
                <img className="profile-photo" src={this.state.profile.avatar_url}/>
            </div>
        );
    }
});

module.exports = ProfileDisplay;
