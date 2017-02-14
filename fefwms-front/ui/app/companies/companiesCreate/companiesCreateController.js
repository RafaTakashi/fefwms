(function () {

    angular.module('app')
        .controller('companiesCreateController', companiesCreateController);

    companiesCreateController.$inject = ['$scope', '$localStorage', 'toastr', '$location', 'lodash', 'companiesService'];

    function companiesCreateController($scope, $localStorage, toastr, $location, lodash, companiesService) {

        var vm = this;

        vm.user = {};
        vm.ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PR", "PB", "PA", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SE", "SP", "TO"];

        vm.createCompany = createCompany;

        function createCompany(){
            vm.user.rehab= 0;
            vm.user.consultation= 0;
            companiesService.create(vm.user)
            .then(function(res){
                $localStorage.company  = res.data;
                toastr.success('ONG criada com sucesso!');
                $location.path('/dashboard');
            })
            .catch(function(err){
                console.log(err);
            })
        };

    }

}());