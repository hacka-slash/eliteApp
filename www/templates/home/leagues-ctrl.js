(function() {

	'use strict';
	
	angular.module('starter.controllers').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);
	
	function LeaguesCtrl($state, eliteApi) {
	
		var vm = this;
		
		var data = eliteApi.getLeagues();
		//var leagueData = eliteApi.getLeagueData();
		
		//console.log(leagues, leagueData);
        console.log(data);
		//vm.leagues = data;
		
		vm.selectLeague = function(id) {
			$state.go("app.teams");
		};
		
	};
	

})();