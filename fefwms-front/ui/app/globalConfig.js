(function() {

    angular.module('app')
        .factory('configFactory', configFactory);

    configFactory.$inject = [];

    function configFactory() {

        config = {
            apiUrl: apiUrl
        };
        return config;

        function apiUrl() {
            return 'http://localhost:3000';
        }

    }
}());
