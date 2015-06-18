
(function(){
	'use strict';
	
	angular.module('starter.services').factory('$http','eliteApi',['$http', eliteApi]);
	
	function eliteApi($http) {

		var currentLeagueId;
        
        /*var leagues = [{Name: "Soap",  Price: "25",  Quantity: "10"},
                        {Name: "Bag",   Price: "100", Quantity: "15"},
                        {Name: "Pen",   Price: "15",  Quantity: "13"}
                    ];
        
        var leagueData = [{Name: "Soap",  Price: "25",  Quantity: "10"},
                            {Name: "Bag",   Price: "100", Quantity: "15"},
                            {Name: "Pen",   Price: "15",  Quantity: "13"}
                        ];*/
        
		
		function getLeagues(callback) {
			$http.get("http://elite-schedule.net/api/leaguedata")
                .success(function(data){
                    callback(data); 
            });
		
		};
		
		function getLeagueData(callback) {
			$http.get("http://elite-schedule.net/api/leaguedata" + currentLeagueId)
                .success(function(data, status){
                    console.log("Recieved schedule data via http", data, status);
                    callback(data);
                })
                .error(function(){
                    console.log("Error while making http call");
                });
		};
        
        function setLeagueId(leagueId){
            currentLeagueId = leagueId;   
        };
        
		
		return {
			getLeagues: getLeagues,
			getLeagueData: getLeagueData,
            setLeagueId: setLeagueId
		};
	};

})();