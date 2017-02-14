(function () {

    angular.module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['$localStorage', 'profileService', 'toastr', 'companiesService'];

    function profileController($localStorage, profileService, toastr, companiesService) {

        var vm = this;
        vm.active = false;
        vm.company = companiesService.getCompany();
        vm.Update = update;
        vm.ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PR", "PB", "PA", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "SP", "TO"];

        function getProfile(){

        }

        function update() {
            companiesService.create(vm.company)
                .then(function (res) {
                    toastr.success('Alterado com sucesso');
                    vm.active = false;
                })
                .catch(function (err) {
                    toastr.error('Ocorreu um erro')
                })
        }
    }

}());