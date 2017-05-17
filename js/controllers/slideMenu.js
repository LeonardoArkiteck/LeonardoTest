angular.module("appModule")
	.controller("slideMenu", function($scope){
		
		$scope.openNav = function openNav(){
    		document.getElementById("mySidenav").style.width = "250px";
		}

		$scope.closeNav = function closeNav() {
		    document.getElementById("mySidenav").style.width = "0";
		}
	})
	