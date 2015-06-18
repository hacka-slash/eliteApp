
(function() { 
	'use strict';
	
	angular.module('starter.controllers').controller('teamDetailCtrl', ['$stateParams', teamDetailCtrl]);
	
	function teamDetailCtrl($stateParams) {
		var vm = this;
		console.log("$stateParams", $stateParams);
	
	}

}) ();