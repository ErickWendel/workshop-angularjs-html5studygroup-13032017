(function (angular) {
    angular.module('controllers', [])
        .controller('MenuController', function ($state) {
            var vm = this;
            vm.tabAtiva = tabAtiva;
            function tabAtiva(item) {
                return $state.current.name.indexOf(item) !== -1;
            }

        })
        .controller('CadastrarController', function ($state, AmigoService) {
            var vm = this;
            vm.amigo = {};
            vm.cadastrar = function () {
                AmigoService.cadastrar(vm.amigo);
                $state.go('app.listar');
            }
        })
        .controller('ListarController', function (AmigoService) {
            var vm = this;
            vm.amigos = AmigoService.listar();
        })
})(angular)