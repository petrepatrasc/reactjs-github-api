var $ = require('jquery');

var GITHUB_BASE = 'https://api.github.com';

var GitHubService = {
    getProfileRepos: function (username) {
        var repositories = {};

        if ('undefined' !== typeof username) {
            $.ajax({
                url: GITHUB_BASE + '/users/' + username + '/repos',
                async: false
            }).done(function (response) {
                repositories = response;
            });
        }

        return repositories;
    },

    getProfileOrganisations: function (username) {
        var organisations = {};

        if ('undefined' !== typeof username) {
            $.ajax({
                url: GITHUB_BASE + '/users/' + username + '/orgs',
                async: false
            }).done(function (response) {
                organisations = response;
            });
        }

        return organisations;
    },

    getProfileInfo: function (username) {
        var profile = {};

        if ('undefined' !== typeof username) {
            $.ajax({
                url: GITHUB_BASE + '/users/' + username,
                async: false
            }).done(function (response) {
                profile = response;
            })
        }

        return profile;
    }
};

module.exports = GitHubService;
