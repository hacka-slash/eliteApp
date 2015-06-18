(function() {

	'use strict';
	
	angular.module('starter.controllers').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);
	
	function LocationsCtrl(eliteApi) {
	
		var vm = this;
		
		var data = eliteApi.getLeagueData();
		//var data = eliteApi.getLeagues();
		
		vm.locations = data;
		
	};
	

})();