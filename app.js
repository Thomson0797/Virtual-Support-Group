(function()
{
    'use strict';


    angular.module('virtualsupport', [])

    .controller('firstcontroller', function($scope)
    {
        $scope.username="";
        $scope.password="";
        $scope.result="";

    });

})();