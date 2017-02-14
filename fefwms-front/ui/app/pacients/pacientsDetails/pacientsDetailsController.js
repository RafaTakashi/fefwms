(function () {

    angular.module('app')
        .controller('pacientsDetailsController', pacientsDetailsController);

    pacientsDetailsController.$inject = ['$scope', '$localStorage', 'pacientsService', 'toastr', '$location', '$routeParams', 'companiesService'];

    function pacientsDetailsController($scope, $localStorage, pacientsService, toastr, $location, $routeParams, companiesService) {
        var vm = this;
        vm.canEdit = false;
        vm.pacient = {};
        vm.consultas = {};
        vm.ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PR", "PB", "PA", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "SP", "TO"];
        vm.treattype = ["Internacao", "Doses Minimas", "Coqueteis"];
        var id = $routeParams.id;
        vm.consultas.ong = $localStorage.company.name
        vm.getPacient = getPacient;

        function getPacient() {
            pacientsService.getDetailsPacients(id)
                .then(function (res) {
                    vm.pacient = res.data[0];
                })
                .catch(function (err) {
                    toastr.error('Um erro ocorreu');
                })
        }
        vm.Update = function () {
            vm.pacient.consultation.push(vm.consultas);
            vm.consultas = {};
            vm.consultas.ong = $localStorage.company.name
            vm.company = $localStorage.company;
            data = {
                consultation: 1
            }
            pacientsService.updatePacients(vm.pacient)
                .then(function (res) {
                    toastr.success('Paciente alterado com sucesso');
                    $location.path('/pacients/' + id);
                })
                .catch(function (err) {
                    toastr.error('Um erro ocorreu')
                    console.log(err);
                })
            companiesService.updateCompany2(vm.company._id, data)
            .then(function(res){
                console.log(vm.company);
            })
            .catch(function(err){
                console.log(err);
            })
        }

        vm.activePacient = function () {
            vm.pacient.rehab = true;
            id = $localStorage.company._id;
            console.log(id);
            data = {
                rehab: 1
            }
            companiesService.updateCompany(id, data)
                .then(function (res) {
                    pacientsService.updatePacients(vm.pacient)
                        .then(function (res) {
                            toastr.success('Paciente reabilitado com sucesso');
                        })
                        .catch(function (err) {
                            toastr.error('Um erro ocorreu')
                            console.log(err);
                        })
                })
                .catch(function (err) {
                    toastr.error('Algo de errado aconteceu!');
                })
        }

        getPacient();
    }

}());