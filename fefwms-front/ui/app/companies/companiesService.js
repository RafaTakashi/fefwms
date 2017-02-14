(function () {

    angular.module('app')
        .factory('companiesService', companiesService);

    companiesService.$inject = ['$http', 'configFactory', '$localStorage'];

    function companiesService($http, configFactory, $localStorage) {

        var urlBase = configFactory.apiUrl();

        function getCompany() {
            return $localStorage.company;
        }

        function getAll() {
            return $http.get(urlBase + '/company/');
        }

        function getById(id) {
            return $http.get(urlBase + '/company/' + id);
        }

        function create(company) {
            var data = {
                cnpj: company.cnpj,
                name: company.name,
                email: company.email,
                password: company.password,
                rehab: company.rehab,
                consultation: company.consultation,
                address: {
                    street: company.address.street,
                    number: company.address.number,
                    neighborhood: company.address.neighborhood,
                    cep: company.address.cep,
                    city: company.address.city,
                    state: company.address.state
                },
                category: company.category,
                phone: company.phone,
            }

            return $http.post(urlBase + '/company/', data);
        }

        function update(data) {
            return $http.put(urlBase + data._id, data);
        }

        function updateCompany(id, data) {
            return $http.put(urlBase + '/company/' + id, data);
        }

        function updateCompany2(id, data) {
            return $http.put(urlBase + '/company/' + id, data);
        }

        var service = {
            getCompany: getCompany,
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            updateCompany: updateCompany,
            updateCompany2: updateCompany2
        };

        return service;

    }

}());