(function() {

    angular.module('app')
        .factory('pacientsService', pacientsService);

    pacientsService.$inject = ['$http', '$localStorage', 'configFactory'];

    function pacientsService($http, $localStorage, configFactory) {

        var urlBase = configFactory.apiUrl();

        service = {
            getPacients: getPacients,
            createPacients: createPacients,
            updatePacients: updatePacients,
            getDetailsPacients:getDetailsPacients
        };
        return service;

        function getPacients() {
            return $http.get(urlBase + '/pacient/');
        }
        function createPacients(pacient){
            return $http.post(urlBase + '/pacient/',pacient);
        }
        function updatePacients(pacient){
            return $http.put(urlBase + '/pacient/' + pacient._id, pacient);
        }
        function getDetailsPacients(id){
            return $http.get(urlBase + '/pacient/' + id);
        }

    }
}());
