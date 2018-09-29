myApp.controller("studentcontroller",function($scope,$route,$routeParams,$http){
    $scope.getStudents=function(){
        $http.get("/api/students/").then(function(response){
            $scope.students=response.data;
        });
    };
        $scope.showStudents = function(){
            var id = $routeParams.id;
            $http.get('/api/students/'+ id).then(function(response){
                $scope.students = response.data;
            });
        };

        $scope.addStudent=function(){
            $http.post("/api/students/",$scope.students).then(function(response){
                // $scope.students=response.data;
                window.location.href="/";
                $scope.students="";
            });
        };

        $scope.updateStudent=function(){
            var id=$routeParams.id;
            $http.post("/api/students/"+id,$scope.students).then(function(response){
                // $scope.students=response.data;
                window.location.href="/";
                // $scope.students="";
            });
        };

        $scope.deleteStudents = function(id){
            var id = id;
            $http.get('/api/students/'+ id).then(function(response){
                $route.reload();
            });
        };
});