var objectAssign = require('object-assign');
var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var $ = require('jquery');
var GitHubService = require('../services/github-service');
var AppConstants = require('../constants/app-constants');

var CHANGE_EVENT = "change";

var ProfileStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },
    getProfileRepos: function (username) {
        return GitHubService.getProfileRepos(username);
    },
    getProfileInfo: function (username) {
        return GitHubService.getProfileInfo(username);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {
        case AppConstants.RETRIEVE_PROFILE:
            ProfileStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;
    }
});

module.exports = ProfileStore;
