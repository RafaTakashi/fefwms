(function() {

    angular.module('app')
     .run(['$rootScope', '$location', '$localStorage', function($rootScope, $location, $localStorage) {
        //  $rootScope.$on('$routeChangeStart', function(event) {
        //      if ($location['$$path'] != '/login') {
        //          if (!$localStorage.company) {
        //              event.preventDefault();
        //              $location.path('/login');
        //          }
        //      }
        //  });
     }]);
     
    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/login', {
                    templateUrl: 'ui/app/login/login.html',
                    controller: 'loginController',
                    controllerAs: 'vm'
                })
                .when('/dashboard', {
                    templateUrl: 'ui/app/dashboard/dashboard.html',
                    controller: 'dashboardController',
                    controllerAs: 'vm'
                })
                .when('/profile', {
                    templateUrl: 'ui/app/profile/profile.html',
                    controller: 'profileController',
                    controllerAs: 'vm'
                })
                .when('/register', {
                    templateUrl: 'ui/app/companies/companiesCreate/companiesCreate.html',
                    controller: 'companiesCreateController',
                    controllerAs: 'vm'
                })
                .when('/companies', {
                    templateUrl: 'ui/app/companies/companiesList/companiesList.html',
                    controller: 'companiesListController',
                    controllerAs: 'vm'
                })
                .when('/companies/:id', {
                    templateUrl: 'ui/app/companies/companiesDetails/companiesDetails.html',
                    controller: 'companiesDetailsController',
                    controllerAs: 'vm'
                })
                .when('/pacients', {
                    templateUrl: 'ui/app/pacients/pacientsList/pacientsList.html',
                    controller: 'pacientsListController',
                    controllerAs: 'vm'
                })
                .when('/pacients/new', {
                    templateUrl: 'ui/app/pacients/pacientsCreate/pacientsCreate.html',
                    controller: 'pacientsCreateController',
                    controllerAs: 'vm'
                })
                .when('/pacients/:id', {
                    templateUrl: 'ui/app/pacients/pacientsDetails/pacientsDetails.html',
                    controller: 'pacientsDetailsController',
                    controllerAs: 'vm'
                })
                .when('/ranking', {
                    templateUrl: 'ui/app/ranking/ranking.html',
                    controller: 'rankingController',
                    controllerAs: 'vm'
                })
                .when('/reports', {
                    templateUrl: 'ui/app/reports/reports.html',
                    controller: 'reportsController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/dashboard'
                });
        }]);

}());