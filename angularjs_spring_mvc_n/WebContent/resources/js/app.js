//configuração do módulo
var app = angular.module('loja', ['ngRoute','ngResource','ngAnimate']);

//configurando rotas
app.config(function($routeProvider, $provide, $httpProvider, $locationProvider) {
	
	$routeProvider.when("/clientelist", {
		controller: "clienteController",
		templateUrl: "cliente/list.html"
	})//listar
	.when("/cliente/:id", {
		controller: "clienteController",
		templateUrl: "cliente/cadastro.html"
	})//editar
	.when("/cliente/cadastro", {
		controller: "clienteController",
		templateUrl: "cliente/cadastro.html"
	})//novo
	.otherwise({
		redirectTo: "/"
	});
});















/*


































app.controller("filterController", function($scope) {
	$scope.friends = [
	    {
		name : "Mario",
		lasname : "souza",
		age : 20,
	    },
	    
	    {
			name : "Maria",
			lasname : "quermina",
			age : 89,
		 },
		 
		 
		 {
				name : "Paulo",
				lasname : "mineiro",
				age : 49,
			 },
			 
			 
			 {
					name : "Vanessa",
					lasname : "perreira",
					age : 22,
				 },	 
	
	];
});
















// criacao do service
app.factory("UserService", function() {
	var users = ["Jo�o","Ivete", "Alex", "Paulo"];// viria do banco de dados
	
	return {
		
		all: function() {
			return users;
		},
		primeiro: function() {
			return  users[0];
		}
		
	};
}); 


// Cria��o do controller
primeiroUserController = app.controller("primeiroUserController", function($scope, UserService) {
	$scope.primeiro =  UserService.primeiro();
});

// ativando injecao de dependecia
primeiroUserController.$inject = ["$scope", "UserService"];// Inject Angular






// segundo controller
todosUserController = app.controller("todosUserController", function($scope, UserService) {
	$scope.todos =  UserService.all();
});

// ativando a inje��o de depencia
todosUserController.$inject = ["$scope", "UserService"];

































app.controller('formCtrl', function($scope) {
    $scope.master = {firstName:"John", lastName:"Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});
















app.controller('controllerClickme', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    };
});







app.controller('controllerCordinates', function($scope) {
    $scope.myFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    };
});















app.controller("controllerPessoa", function($scope, $resource) {
	
	// com Spring Framework RestFul
	//pessoas = $resource("/pessoas/:codPessoa");
	
	// Com Servlets
	pessoas = $resource("/angularjs_spring_mvc/pessoas/?codPessoa=:codPessoa");
	
	// busca por codPessoa
	$scope.getPorId = function() {
		pessoas.get({codPessoa: $scope.codPessoa}, function(data) {
				$scope.objetoPessoa = data;
		});
	};
	
	
	// busca todos
	$scope.getPorTodos = function() {
		pessoas.query(function(data) {
			$scope.objetoPessoa = data;
		});
	};
	//---
	
	
	// salvar pessoa
	$scope.salvarPessoa = function() {
		p = new pessoas();
		p.numero = '5454554';
		p.$save();
	};
	
	// deletar pessoa
	$scope.deletearPessoa = function() {
		pessoas.$delete({codPessoa:"60"});
	};
	
	
});






app.controller('namesController', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
});

















// INICIO ANGULAR HTTP
app.controller('pegarResposta', function($scope, $http) {
	
	$scope.pegarResposta = function() {
		$http.get("pegarResposta").then(function (response) {
			document.getElementById("resposta").value = ""+response.data;
		});
	};
});






app.controller('pegarResposta2', function($scope, $http) {
	$scope.pegarResposta2 = function() {
    $http.get("pegarResposta")
    .then(function(response) {
    	document.getElementById("resposta2").value = ""+response.data;
    	document.getElementById("resposta3").value = ""+response.status;
    	document.getElementById("resposta4").value = ""+response.statusText;
    });
	};
});


app.controller('pegarRespostaErro', function($scope, $http) {
	$scope.pegarRespostaErro = function() {
	  $http.get("pegarRespostaErro")
	  .then(function(response) {// resposta bem sucedida
			document.getElementById("respostaerro").value = ""+response.statusText;
	  }, function(response) {// lida comerros
			document.getElementById("respostaerro").value = ""+response.statusText;
	  });
   };  
});







app.controller('pegarRespostaJson', function($scope, $http) {
	  $http.get("pegarRespostaJson").then(function (response) {
	      $scope.lista = response.data;
	  });
});












/// FIM ANGULAR HTTP



















/// services
app.controller('localizacao', function($scope, $location) {
    $scope.myUrl = $location.port();
});


app.controller('controllerTimeOut', function($scope, $timeout) {
    $scope.timermsg = "Oi!";
    $timeout(function () {
        $scope.timermsg = "Oi depois de 3 segundos";
    }, 3000);
});


app.controller('controllerIntervalo', function($scope, $interval) {
    $scope.intervalo = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.intervalo = new Date().toLocaleTimeString();
    }, 1000);
});



// services




















app.controller('personCtrl', function($scope) {
	$scope.firstName = "John teste";
	$scope.lastName = "Doe sdsds";
});



app.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
});




app.controller('costCtrl', function($scope) {
    $scope.price = 58;
});



app.controller('namesCtrl2', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});



app.controller('namesCtrl3', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});



app.controller('namesCtrl4', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    };
});

























/*
// Config - > Use este m�todo para registrar o trabalho que  precisa ser executado no carregamento do m�dulo.

//when -> Adiciona uma nova defini��o de rota ao servi�o $ route.

// otherwise - > Define a defini��o da rota que ser� usada na mudan�a de rota quando nenhuma outra defini��o de rota for igualada.


app.config(function($routeProvider) {
	$routeProvider
	.when("/", {controller: "listController", templateUrl: "list.html"})// listar
	.when("/edit/:name", {controller: "editController", templateUrl: "form.html"})// editar
	.when("/new", {controller: "newController", templateUrl: "form.html"})// novo
	.otherwise({redirectTo: "/"});
});

//Registro de trabalho que deve ser realizado quando o injetor � feito carregando todos os m�dulos.
app.run(function($rootScope) {
		$rootScope.frutas = ['bana', 'abacaxi'];
});

app.controller('listController', ['$scope', '$routeParams', '$rootScope' ,'$route' ,'$location', 
                                  function($scope, $routeParams, $rootScope ,$route ,$location) {
	
}]);

//$scope � o escopo da aplica��o html
//$location redirecionamento entre rotas
//$routeParams s�o os parametros repassador pela url
app.controller('editController', ['$scope', '$routeParams', '$rootScope' ,'$route' ,'$location', 
              function editController($scope, $routeParams, $rootScope ,$route ,$location) {
	
	$scope.title = 'Editar frutas'; // adicionando titulo a pagina
	$scope.fruta =  $routeParams.name;// pegando o nome da fruta para editar
	$scope.frutaIndex = $scope.frutas.indexOf($scope.fruta);// pegando a fruta dentro da lista
	
	$scope.salvar = function () {
		$scope.frutas[$scope.frutaIndex] = $scope.fruta; // pega o novo nome da fruta editada
		$location.path('/');// volta para o index
	};
}]);


app.controller('newController', ['$scope', '$routeParams', '$rootScope' ,'$route' ,'$location',
		function newController($scope, $routeParams, $rootScope ,$route ,$location) {
			$scope.title = 'Nova Fruta';
			$scope.fruta = '';

			$scope.salvar = function() {
				$scope.frutas.push($scope.fruta); // add nova fruta.
				$location.path('/');// volta para o index
			};

}]);

})(window.angular);

*/
