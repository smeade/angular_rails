angular.module('flapperNews', [])
.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.intro = 'Rocking it!';

  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') {return};
    $scope.posts.push({title: $scope.title, upvotes: 0, link: $scope.link});
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes +=1 ;
  };

  $scope.decrementUpvotes = function(post) {
    post.upvotes -=1;
  };
}]);
