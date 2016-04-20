counterApp.factory('ExampleFactory', function(){
  var UserFactory = function() {
    this.currentTime = Date();
  }

  UserFactory.prototype.storeTime = function() {
    this.currentTime = Date();
  };

  return UserFactory;
});

counterApp.service('ExampleService', function(){
  this.currentTime = Date();

  this.storeTime = function() {
    this.currentTime = Date();
  };
});

counterApp.controller('ExampleCtrl', function(ExampleFactory, ExampleService){

  var self = this;

  self.exampleFactory = new ExampleFactory;
  self.exampleService = ExampleService;
});

counterApp.controller('CounterCtrl', ['CounterFactory', function(CounterFactory){
  var self = this;

  this.counters = [new CounterFactory]
}]);


counterApp.factory('CounterFactory', function(){
  var CounterFactory = function() {
    this.count = 0;
  }

  CounterFactory.prototype.increment = function() {
    this.count++;
  };

  CounterFactory.prototype.decrement = function() {
    this.count--;
  };

  return CounterFactory;
});
