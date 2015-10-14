angular.module('flapperNews')
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.intro = 'Rocking it!';

  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if(!$scope.title || $scope.title === '') {return};
    $scope.posts.push({
      title: $scope.title,
      upvotes: 0,
      link: $scope.link,
      comments: [
        {author: "Jonathan", body: "Cool post", upvotes: 0},
        {author: "Rachel", body: "Cool post", upvotes: 0},
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes +=1 ;
  };

  $scope.decrementUpvotes = function(post) {
    post.upvotes -=1;
  };
}])
