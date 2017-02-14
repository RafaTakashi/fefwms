    /* global angular */
    (function() {
        angular.module("app")
            .controller("reportsController", function($scope) {
                $scope.chartObject = {
                    data: [
                        ['State', 'Tipo'],
                        ['Acre', 4],
                        ['Alagoas', 2],
                        ['Amapá', 3],
                        ['Amazonas', 1],
                        ['Bahia', 2],
                        ['Ceará', 4],
                        ['Distrito Federal', 1],
                        ['Espírito Santo', 2],
                        ['Goiás', 3],
                        ['Maranhão', 1],
                        ['Mato Grosso', 2],
                        ['Mato Grosso do Sul', 3],
                        ['Minas Gerais', 1],
                        ['Pará', 2],
                        ['Paraíba', 3],
                        ['Paraná', 1],
                        ['Pernambuco', 2],
                        ['Piauí', 4],
                        ['Rio de Janeiro', 1],
                        ['Rio Grande do Norte', 2],
                        ['Rio Grande do Sul', 3],
                        ['Rondônia', 1],
                        ['Roraima', 2],
                        ['Santa Catarina', 3],
                        ['São Paulo', 4],
                        ['Sergipe', 2],
                        ['Tocantins', 3]
                    ], //your array
                    options: {
                        region: 'BR',
                        resolution: 'provinces',
                        width: 500,
                        height: 500,
                        legend: 'none',
                        colorAxis: {
                            colors: ['green', 'blue', 'orange', 'red'],
                            backgroundColor: 'transparent'
                        }
                    },
                    type: "GeoChart"
                };

                $scope.donutLabels = ["Homens", "Mulheres"];
                $scope.donutData = [300, 500];
                $scope.chartColors = ["#000099", "#b30000"]



                $scope.barLabels = ['AAMPARA', 'APACN', 'APAE', 'AAPAC', 'ADIFI'];
                $scope.barSeries = ['Atendimentos', 'Reabilitações'];

                $scope.badData = [
                    [65, 59, 80, 81, 56],
                    [28, 48, 40, 19, 42]
                ];
            });
    })();