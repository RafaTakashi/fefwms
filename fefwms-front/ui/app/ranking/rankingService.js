(function() {

    angular.module('app')
        .factory('rankingService', rankingService);

    rankingService.$inject = ['$http', 'configFactory'];

    function rankingService($http, configFactory) {

      var urlBase = configFactory.apiUrl();

        var service = {
            getAttendance: getAttendance
        };
        return service;

        function getAttendance(name) {
            return $http.get(urlBase + '/ranking/', name);
        }
    }

}());
