var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var AppActions = {
    retrieveProfile: function(username) {
        AppDispatcher.handleAction({
            actionType: AppConstants.RETRIEVE_PROFILE,
            username: username
        })
    }
};

module.exports = AppActions;
