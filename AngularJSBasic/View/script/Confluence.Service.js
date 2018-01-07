/// <reference path="Confluecnce.angular.js" />
app.service("ConfluenceService", function ($http) {
            this.getVersion = function () {
            return $http.get("api/Confluence/GetVersion")
        }
});