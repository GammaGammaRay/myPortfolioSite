'use strict';

/**
 * @ngdoc function
 * @name inConstructionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inConstructionApp
 */
angular.module('inConstructionApp')
  .controller('MainCtrl', [ '$scope', function ($scope) {
    $scope.awesomeThings = [
      {
        title:'HTML5 Boilerplate',
        content: "  HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites."
      },
      {
        title:'Contact',
        content: "123"
      },
      {
        title:'Karma',
        content: "Is a bitch"
      }
    ];
    $scope.saveThing = function() {
      var newObj = {
        title: $scope.newThing,
        content : $scope.newContent
      }

    $scope.awesomeThings.push(newObj)
    }
  }]);
