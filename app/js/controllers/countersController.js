countersApp.controller("countersCtrl", function(){
  var self = this;

  self.myCounters = [{count : 0}, {count : 0}]

  self.increment = function(hash) {
    hash.count++;
  }

  self.decrement = function(hash) {
    hash.count--;
  }

});
