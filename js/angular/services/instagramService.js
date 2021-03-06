(function() {
    var app = angular.module("martinsWeb");

    var instagramService = ['$q', '$log', '$http', function($q, log, $http) {
        var getInitialSelfFlow = function(userId) {
            return $http({
                url: './model/instagramService.php',
                method: "POST",
                data: $.param({
                    userId: userId
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                log.error('getInitialSelfFlow fail');
            });
        };

        var getSelfFlowWithMaxId = function(userId, maxId) {
            return $http({
                url: './model/instagramService.php',
                method: "POST",
                data: $.param({
                    maxId: maxId,
                    userId: userId
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                log.error('getSelfFlowWithMaxId fail');
            });
        };

        var searchForUser = function(query) {
            return $http({
                url: './model/instagramService.php',
                method: "POST",
                data: $.param({
                    action: "search",
                    query: query
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                log.error('searchForUser fail');
            });
        };

        var getMediaByTag = function(tag) {
            return $http({
                url: './model/instagramService.php',
                method: "POST",
                data: $.param({
                    action: "getMediaByTag",
                    tag: tag
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                log.error('getMediaByTag fail');
            });
        };

        var getMediaByTagWithMaxId = function(tag, maxId) {
            return $http({
                url: './model/instagramService.php',
                method: "POST",
                data: $.param({
                    action: "getMediaByTagWithMaxId",
                    tag: tag,
                    maxId: maxId
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                log.error('getMediaByTagWithMaxId fail');
            });
        };

        var getUserInformation = function(userId) {
            return $http({
                url: './model/instagramService.php',
                method: "POST",
                data: $.param({
                    action: "getUserInformation",
                    userId: userId
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            success(function(data, status, headers, config) {
                return data;
            }).
            error(function(data, status, headers, config) {
                log.error('getUserInformation fail');
            });
        };

        return {
            getInitialSelfFlow: function(userId) {
                return getInitialSelfFlow(userId);
            },
            getSelfFlowWithMaxId: function(userId, maxId) {
                return getSelfFlowWithMaxId(userId, maxId);
            },
            searchForUser: function(query) {
                return searchForUser(query);
            },
            getUserInformation: function(userId) {
                return getUserInformation(userId);
            },
            getMediaByTag: function(tag) {
                return getMediaByTag(tag);
            },
            getMediaByTagWithMaxId: function(tag, maxId) {
                return getMediaByTagWithMaxId(tag, maxId);
            }
        };
    }];

    app.service('instagramService', instagramService);
}());