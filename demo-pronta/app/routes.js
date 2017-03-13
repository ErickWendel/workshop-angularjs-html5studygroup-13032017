(function (angular) {
    angular.module('routes', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'MenuController as vm',
                    
                })
                .state('app.home', {
                    url: '/home',
                    templateUrl: 'templates/home.html'
                })
                .state('app.cadastrar', {
                    url: '/cadastrar',
                    controller: 'CadastrarController as vm',
                    templateUrl: 'templates/cadastrar.html'
                })
                .state('app.listar', {
                    url: '/listar',
                    controller: 'ListarController as vm',
                    templateUrl: 'templates/listar.html'
                })

            $urlRouterProvider.otherwise('/app/home')
        })
})(angular)