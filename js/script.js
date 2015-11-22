var app = angular.module('dndpuzzle', []);
app.controller('Main',['$scope', function ($scope) {
  $scope.white_keys = [
    {name: "F", trigger: [1, 3, 5, 9]}
    , {name: "G", trigger: [1, 4, 8]}
    , {name: "A", trigger: [1, 4, 5, 7, 8]}
    , {name: "B", trigger: [2, 4, 8, 9]}
  ];
  $scope.black_keys = [
    {name: "F#", trigger: [2, 6, 7]}
    , {name: "A♭", trigger: [3, 6, 9]}
    , {name: "B♭", trigger: [3, 5, 7]}
  ];
  $scope.squares = [
    {klass: false}
    , {klass: true}
    , {klass: true}
    , {klass: false}
    , {klass: false}
    , {klass: false}
    , {klass: false}
    , {klass: false}
    , {klass: true}
  ];
  $scope.pressPianoKey = function(trigger) {
    for (var t in trigger) {
      var index = trigger[t] - 1;
      $scope.squares[index].klass = !$scope.squares[index].klass;
    }
  };
}]);