(function() {

	'use strict';
	
	angular.module('starter.controllers').controller('StandingsCtrl', ['eliteApi', StandingsCtrl]);
	
	function StandingsCtrl(eliteApi) {
	
		var vm = this;
		
		var data = eliteApi.getLeagueData();
		//var data = eliteApi.getLeagues();
		
		vm.teams = data;
		
	};
	

})();