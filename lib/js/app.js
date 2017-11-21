
var app = angular.module('appCategorys', []);

app.controller('Categorys', ['$http', '$scope', function($http, $scope) {
  /**
   * Valor inicial para el texto de errores
   * @type {String}
   */

  $http.get("https://www.reddit.com/reddits.json")
    .then(function(response) {
        $scope.myWelcome = response.data;
        $scope.ArrayFree=[];
        $scope.ArrayGames=[];
        $scope.ArraySports=[];
        $scope.ArrayEntertains=[];
         $scope.ArrayApp=[];

       
        for (var i = 0;  i <= $scope.myWelcome.data.children.length - 1;  i++) {
          if($scope.myWelcome.data.children[i].data.advertiser_category=='Lifestyles'){
            //console.log($scope.myWelcome.data.children[i]);
            $scope.ArrayFree.push($scope.myWelcome.data.children[i]);
          }else if ($scope.myWelcome.data.children[i].data.advertiser_category=='Games'){
            $scope.ArrayGames.push($scope.myWelcome.data.children[i]);
          }else if ($scope.myWelcome.data.children[i].data.advertiser_category=='Sports'){
            $scope.ArraySports.push($scope.myWelcome.data.children[i]); 
          }else if ($scope.myWelcome.data.children[i].data.advertiser_category=='Entertainment'){
            $scope.ArrayEntertains.push($scope.myWelcome.data.children[i]); 
          }else{
             $scope.ArrayApp.push($scope.myWelcome.data.children[i]);
          }
        }
        console.log($scope.ArrayFree);
    
    });
    $scope.myFunc = function(id) {
      $scope.title= null;
      $scope.description = null;
      $scope.image = null;

      for (var i = 0; i <=  $scope.myWelcome.data.children.length-1; i++) {
        if($scope.myWelcome.data.children[i].data.id==id){
           $scope.title =$scope.myWelcome.data.children[i].data.title;
           $scope.description = $scope.myWelcome.data.children[i].data.public_description;
           $scope.image =  $scope.myWelcome.data.children[i].data.banner_img;


        }

       
      }
      
       
    };
}]);