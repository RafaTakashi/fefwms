(function () {

    angular.module('app')
        .directive('headerDirective', headerDirective);

    function headerDirective() {

        return {
            restrict: 'E',
            templateUrl: 'ui/app/directives/header.html',
            controller: ['$scope', '$localStorage', '$location', function ($scope, $localStorage, $location) {
 
                $scope.exit = function () {
                    $localStorage.token = '';
                    $localStorage.company = {};
                    $localStorage.tab = 'home';
                    $location.path('/login');
                };

                $scope.tab = $localStorage.tab;

                $scope.selectedTab = function (tab) {
                    $localStorage.tab = tab;
                };

            }]
        };
    }

}());