(function () {

    angular.module('app')
        .controller('pacientsCreateController', pacientsCreateController);

    pacientsCreateController.$inject = ['$scope', '$localStorage', 'pacientsService', 'toastr', '$location', 'lodash'];

    function pacientsCreateController($scope, $localStorage, pacientsService, toastr, $location, lodash) {
        var vm = this;
        vm.pacient = {};
           vm.ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PR", "PB", "PA", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "SP", "TO"];
        function get() {
            pacientsService.getDetailsPacients()
                .then(function (res) {
                    if (res)
                        toastr.error('Paciente já Cadastrado');
                    else
                        Create(vm.pacient);
                })
                .catch(function (err) {
                    console.log(err)
                    toastr.error('Um erro ocorreu');
                })
        }

        vm.Create = function() {
            vm.pacient.rehab = false;
            pacientsService.createPacients(vm.pacient)
                .then(function (res) {
                    console.log("Sucess");
                    toastr.success('Paciente criado com sucesso');
                    $location.path('/pacients');
                })
                .catch(function (err) {
                    console.log(err);
                    toastr.error('um erro ocorreu');
                })
        }

    }

}());