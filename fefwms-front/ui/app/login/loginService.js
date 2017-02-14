(function() {

    angular.module('app')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', 'configFactory'];

    function loginService($http, configFactory) {

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
