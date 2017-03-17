/**
 * Created by Administrator on 2017/2/28.
 */

var Yike = angular.module("Yike", ["ngRoute","Ctrls"]);

//直接运行服务。因为如果使用依赖来实现toggle方法没有合适的依赖
Yike.run(["$rootScope", function ($rootScope) {

    $rootScope.collapsed = false;
    $rootScope.toggle = function () {
        //点击小导航按钮的时候，把类名变为true
        //$rootScope.collapsed = true;

        //toggle的方法：每次都对自己取反即可
        $rootScope.collapsed = !$rootScope.collapsed;

        var navs = document.querySelectorAll(".navs dd");
        // console.log(navs);
        //dd元素小动画效果
        if ($rootScope.collapsed) {
            //-100% => 0
            for (var i = 0; i < navs.length; i++) {
                navs[i].style.transform = "translate(0)";
                navs[i].style.transitionDuration = 0.15 * (i + 1) + 's';
                navs[i].style.transitionDelay = "0.3s";
            }
        } else {
            // 0 ==>  -100%
            for (var j = navs.length - 1; j >= 0; j--) {
                navs[j].style.transform = "translate(-100%)";
                navs[j].style.transitionDuration = (navs.length - j) * 0.15 + 's';
                //因为在上面加了延迟属性。它就会一直存在。现在得取消
                navs[j].style.transitionDelay = "";
            }
        }
    }

}]);


//配置路由
Yike.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/today", {
        templateUrl: "./views/today.html",
        controller: "TodayCtrl"
    }).when("/older", {
        templateUrl: "./views/older.html",
        controller: "OlderCtrl"
    }).when("/author", {
        templateUrl: "./views/author.html",
        controller: "AuthorCtrl"
    }).when("/category", {
        templateUrl: "./views/category.html"
    }).when("/like", {
        templateUrl: "./views/like.html"
    }).when("/settings", {
        templateUrl: "./views/settings.html"
    }).otherwise({
        redirectTo: "/today"
    });
}]);

