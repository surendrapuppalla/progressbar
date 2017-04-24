angular.module('test', ['ui.bootstrap']);
angular.module('test').controller("Ctrl",function ($scope) {
  var profile = this;

  $scope.size = function(data){
    //console.log(data);
    var total = 100;
    var ControlCount = data.$$controls.length;
    var required = total/ControlCount;
    //console.log(data.$$controls.length)
    // console.log(required)
    var calculation = 0;
    if(data.$error.hasOwnProperty('required')){
    //console.log(data.$error.hasOwnProperty('required'));
      var errorCount = data.$error.required.length;
    //console.log(errorCount);
    if(errorCount != ControlCount){
      calculation = (errorCount === 1) ? total - required : total/errorCount;
      // console.log(calculation);
    }
    return calculation;
    }
    // console.log(total);
    return total;

  }
  
});