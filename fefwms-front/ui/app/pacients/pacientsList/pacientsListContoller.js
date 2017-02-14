(function () {

    angular.module('app')
        .controller('pacientsListController', pacientsListController);

    pacientsListController.$inject = ['$scope', '$localStorage', 'pacientsService', 'toastr', '$location'];

    function pacientsListController($scope, $localStorage, pacientsService, toastr, $location) {
        var vm = this
        vm.pacients = [];
        get();

        function get() {
            pacientsService.getPacients()
                .then(function (res) {
                    vm.pacients = res.data;
                })
                .catch(function (err) {
                    toastr.error('Um erro ocorreu')
                    console.log(err)
                })
        }
    }
}());