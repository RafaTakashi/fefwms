(function () {

    angular.module('app')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['$scope', '$localStorage', 'toastr', '$location', 'lodash', 'pacientsService', 'companiesService'];

    function dashboardController($scope, $localStorage, toastr, $location, lodash, pacientsService, companiesService) {
        var vm = this;
        var _ = lodash;
        vm.companies = [];
        vm.rehabs = 0;
        vm.pacients = [];
        vm.consults = 0;

        function get() {
            pacientsService.getPacients()
                .then(function (res) {
                    vm.pacients = res.data;
                    _.each(vm.pacients, function (x) {
                        if (x.consultation)
                            vm.consults += x.consultation.length;
                    })
                })
                .catch(function (err) {
                    toastr.error('Um erro ocorreu')
                    console.log(err)
                })
        }


        function getAll() {
            companiesService.getAll()
                .then(function (res) {
                    vm.companies = res.data;
                    _.each(vm.companies, function (n) {
                        if (n.rehab)
                            vm.rehabs = vm.rehabs + n.rehab;
                    });
                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        getAll();
        get();
    }

}());