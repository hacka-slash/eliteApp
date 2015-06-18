(function() {

	'use strict';
	
	angular.module('starter.controllers').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);
	
	function TeamsCtrl(eliteApi) {
	
		var vm = this;
		
		eliteApi.getLeagues(function(data){
            vm.teams = data.teams;   
        });
		//var data = eliteApi.getLeagues();
		
		//vm.teams = data;
		
	};
	

})();