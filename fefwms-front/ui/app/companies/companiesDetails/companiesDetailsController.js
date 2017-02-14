(function () {

    angular.module('app')
        .controller('companiesDetailsController', companiesDetailsController);

    companiesDetailsController.$inject = ['$scope', '$localStorage', 'companiesService', 'toastr', '$routeParams'];

    function companiesDetailsController($scope, $localStorage, companiesService, toastr, $routeParams) {

        var vm = this;
        var companyId = $routeParams.id;
        vm.companies = [];

        function getCompany(){
            companiesService.getById(companyId)
            .then(function(res){
                vm.companies = res.data;
            })
            .catch(function(err){
                console.log(err);
            })
        }

        getCompany();

    }

}());