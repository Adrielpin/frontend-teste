app.service('LoginService', function($http) {
    return {
        loginUser: function(credentials) {

            // var deferred = $q.defer();
            // var promise = deferred.promise;

            // if (name == 'user' && pw == 'secret') {
            //     deferred.resolve('Welcome ' + name + '!');
            // } else {
            //     deferred.reject('Wrong credentials.');
            // }
            // promise.success = function(fn) {
            //     promise.then(fn);
            //     return promise;
            // }
            // promise.error = function(fn) {
            //     promise.then(null, fn);
            //     return promise;
            // }
            // return promise;

            var authUser = $http({method:'POST',url:'http://pocket.app/login',params:credentials}); 
            return authUser; 
        }
    }
});