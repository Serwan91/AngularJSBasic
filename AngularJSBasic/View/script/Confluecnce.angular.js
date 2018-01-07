/// <reference path="_reference.js" />

var app = angular.module("simplepractices", ['ngSanitize', 'ngRoute'])
app.config(routConfig);
routConfig.$inject = ['$routeProvider', '$locationProvider'];


function routConfig($routeProvider, $locationProvider) {
	$routeProvider
        .otherwise({ redirectTo: '/View/Index.html' });
	$locationProvider.html5Mode(true);
}


app.controller("indexController", function ($scope, $http, $sce) {
	var vm = $scope;
	vm.DetailSection = "";

	vm.SetDetailSection = function (viewname) {
	    //vm.DivSection = "<a> This is tst</a>";
	    vm.contentpath = '/' + viewname + '.html';
	};
	

	$http.get("api/Confluence/GetVersion").then(function (response) {
	    vm.VersionItems = response.data;
	})

	vm.getList = function () {
	    $http.get("api/Confluence/GetVersionContent?selecteditem="+this.selecteditem).then(function (response) {
	        vm.VersionContentList = response.data;
	    })
	}
	//vm.VersionItems = ["dasd", "sadas", "das"];
})