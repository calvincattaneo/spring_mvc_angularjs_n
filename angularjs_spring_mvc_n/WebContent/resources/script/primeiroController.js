var app = angular.module('loja', []);

app.controller('primeiroController', ['$scope', function($scope) {
	$scope.user = {meuNome :'João de Souza'};
	
	$scope.contador = 0;
	
	$scope.addAcontador = function() {
		$scope.contador++;
	};
	
	$scope.pessoas = ['ana', 'mario', 'josé'];
	
}]);