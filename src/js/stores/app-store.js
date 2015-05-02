var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var objectAssign = require('object-assign');
var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _username = '';
var _profileDisplay = 'profile-hidden';

var _getUsername = function() {
    return _username;
}

var _getProfileDisplay = function() {
    return _profileDisplay;
}

var getProfile = function() {
    var username = _getUsername();
    console.log(username);

    var gitHubProfile = {};

    if ('undefined' !== typeof username) {
        $.ajax({
            'url': 'https://api.github.com/users/' + username,
            'async': false
        }).done(function(data) {
            gitHubProfile = data;
        });
    }

    console.log('github profile', gitHubProfile);

    return gitHubProfile;
}

var AppStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getUsername: function(){
        return _getUsername()
    },
    getProfile: function() {
        return getProfile();
    },
    getProfileDisplay: function() {
        return _getProfileDisplay();
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        case AppConstants.RETRIEVE_PROFILE:
            _username = action.username;
            _profileDisplay = 'profile-visible';
            AppStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = AppStore;
