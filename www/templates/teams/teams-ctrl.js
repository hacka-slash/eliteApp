(function() {

	'use strict';
	
	angular.module('starter.controllers').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);
	
	function TeamsCtrl(eliteApi) {
	
		var vm = this;
		
		var data = eliteApi.getLeagueData();
		//var data = eliteApi.getLeagues();
		
		vm.teams = data.teams;
		
	};
	

})();