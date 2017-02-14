(function () {

    angular.module('app')
        .controller('rankingController', rankingController);

    rankingController.$inject = ['$localStorage', 'toastr', '$location', 'rankingService','companiesService', 'lodash'];

    function rankingController($localStorage, toastr, $location, rankingService,companiesService, lodash) {
        var vm = this;     
        var _ = lodash;
        vm.company = $localStorage.company.name;
        vm.companyAttendance = [];     
        vm.countCompany=[];
        function rankingAttendance() {
            rankingService.getAttendance(vm.company)
                .then(function (res) {
                    vm.companyAttendance = res.data;
                    console.log(vm.companyAttendance)
                    vm.lengthPacient = vm.companyAttendance.length;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }

        function getCompany(){
            companiesService.getAll()
            .then(function(res){
                _.each(res.data, function(n) {
                    if(!n.rehab)
                        n.rehab = 0;
                    if(!n.consultation)
                    n.consultation = 0;
                });
                vm.countCompany = res.data;
                console.log(vm.countCompany)
            })
            .catch(function(err){
                toastr.error('Algo deu errado!');
            })
        }
        getCompany();
        rankingAttendance();
    }

}());