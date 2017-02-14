(function () {

    angular.module('app')
        .controller('companiesListController', companiesListController);

    companiesListController.$inject = ['$scope', '$localStorage', 'companiesService', 'toastr', '$location', 'lodash'];

    function companiesListController($scope, $localStorage, companiesService, toastr, $location) {

        var vm = this;

        vm.companies = [];

        function getAll() {
            companiesService.getAll()
                .then(function (res) {
                   vm.companies = res.data;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        getAll();

    }

}());