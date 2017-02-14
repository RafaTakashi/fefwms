(function() {

    angular.module('app')
        .factory('dashboardService', dashboardService);

    dashboardService.$inject = ['$http', 'configFactory'];

    function dashboardService($http, configFactory) {

      var urlBase = configFactory.apiUrl();

        var service = {
            login: login
        };
        return service;

        function login(data) {
            return $http.post(urlBase + '/login/', data);
        }

    }

}());
