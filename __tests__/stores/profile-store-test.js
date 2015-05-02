describe('Profile Store', function () {
    jest.dontMock('../../src/js/stores/profile-store');
    jest.dontMock('object-assign');

    var AppDispatcher;
    var callback;
    var ProfileStore;

    var AppConstants = require('../../src/js/constants/app-constants');

    // mock actions inside dispatch payloads
    var actionTodoCreate = {
        source: 'VIEW_ACTION',
        action: {
            actionType: AppConstants.RETRIEVE_PROFILE,
            username: 'petrepatrasc'
        }
    };

    beforeEach(function () {
        AppDispatcher = require('../../src/js/dispatcher/app-dispatcher');
        ProfileStore = require('../../src/js/stores/profile-store');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', function () {
        expect(AppDispatcher.register.mock.calls.length).toBe(1);
    });

    it('stores the required username when a new profile needs to be retrieved', function () {
        callback(actionTodoCreate);

        expect(ProfileStore.getUsername()).toEqual('petrepatrasc');
    });
});
