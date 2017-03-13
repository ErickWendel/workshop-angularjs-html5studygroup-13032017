(function (angular) {
    angular.module('services', [])
        .factory('AmigoService', function () {
            return {
                cadastrar: cadastrar,
                listar: listar
            };
            function listar() {

                return obterAmigos();
            }
            function cadastrar(item) {
                var amigos = obterAmigos();
                amigos.push(item);
                localStorage.amigos = JSON.stringify(amigos);
            }
            function obterAmigos ( ) {
                return JSON.parse(localStorage.amigos || '[]');
            }
        })
})(angular)