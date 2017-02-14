(function() {

    angular.module('app')
        .factory('profileService', profileService);

    profileService.$inject = ['$http', 'configFactory'];

    function profileService($http, configFactory) {

      var urlBase = configFactory.apiUrl();

        var service = {
            getById: getById
        };
        return service;

        function getById(id) {
            return $http.post(urlBase + '/login/' + id);
        }
    }

}());
