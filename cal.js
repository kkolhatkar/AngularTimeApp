var module = angular.module("calc", []);
module.controller("calf",cal);
function cal($scope){
	$scope.ans = 0;
	$scope.calculate = function(button){
		$scope.op = button;
		var n1 = parseFloat($scope.num1);
		var n2 = parseFloat($scope.num2);
		if($scope.op==='+'){
			$scope.ans = n1+n2;
		}else if($scope.op ==='-'){
			$scope.ans = n1-n2;
		}else if($scope.op==='*'){
			$scope.ans = n1*n2;
		}else if($scope.op==='/'){
			$scope.ans = n1/n2;
		}
		
	}
}