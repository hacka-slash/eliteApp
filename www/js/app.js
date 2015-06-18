// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('eliteApp', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  //Since /home is abstract, it has its ion-nav-views aka child states, and each have their own templates:
	.state('home', {
		abstract: true,
		url: "/home",
		templateUrl: "templates/home.html"
	})
	
			.state('home.leagues', { 
				url: "/leagues",
				views: {
					"tab-leagues": {
						templateUrl: "templates/home/leagues.html"
					}
				}
			})
			
			.state('home.myteams', { 
				url: "/myteams",
				views: {
					"tab-myteams": {
						templateUrl: "templates/home/myteams.html"
					}
				}
			})
	
	.state('app' , {
		abstract: true,
		url: "/app",
		templateUrl: "templates/menu-layout.html"
	})
	
			.state('app.teams', { 
				url: "/teams",
				views: {
					"mainContent": {
						templateUrl: "templates/teams/teams.html"
					}
				}
			})	
			
			.state('app.team-detail', { 
				url: "/teams/:id",
				views: {
					"mainContent": {
						templateUrl: "templates/teams/team-detail.html"
					}
				}
			})	
			
			.state('app.game', { 
				url: "/game/:id",
				views: {
					"mainContent": {
						templateUrl: "templates/game/game.html"
					}
				}
			})	
			
			.state('app.standings', { 
				url: "/standings",
				views: {
					"mainContent": {
						templateUrl: "templates/standings/standings.html"
					}
				}
			})	
			
			.state('app.locations', { 
				url: "/locations",
				views: {
					"mainContent": {
						templateUrl: "templates/locations/locations.html"
					}
				}
			})	
			
			.state('app.rules', { 
				url: "/rules",
				views: {
					"mainContent": {
						templateUrl: "templates/rules/rules.html"
					}
				}
			});	

  /*.state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  }); */
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/leagues');
  //$urlRouterProvider.otherwise('/app/rules');
});
