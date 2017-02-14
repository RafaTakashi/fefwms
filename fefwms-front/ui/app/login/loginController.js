(function() {

    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', 'loginService', '$localStorage', 'toastr', '$location'];

    function loginController($scope, loginService, $localStorage, toastr, $location) {

        $scope.user = {};

        $scope.register = function(){
            $location.path("/register");
        }

        $scope.login = function() {

            var email = $scope.user.email;
            var password = $scope.user.password;

            if (!email)
                return;

            if (!password)
                return;

            var filter = {
                "email": email,
                "password": password
            };

            loginService.login(filter)
                .then(function(res) {
                        $localStorage.company = res.data.company;
                        toastr.success('Bem-Vindo!');
                        $location.path('/dashboard');
                })
                .catch(function(err) {
                    toastr.error('Email ou Senha incorretos!', 'Erro');
                });

        };

    }
}());
