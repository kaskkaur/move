var moveApp = angular.module('move', ['ngRoute','ngResource', "firebase", 'ngAnimate', 'ui.bootstrap', 'ui.router', 'ngProgress']);



moveApp.directive('draggable', function() {
    return {
        scope: {
            dragstart: '&'
        },
        link: function(scope, element) {
            // this gives us the native JS object
            var el = element[0];
            el.draggable = true;            
            el.addEventListener(
                'dragstart',
                function(e) {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('Text', this.id);
                    this.classList.add('drag');
                    scope.$apply('dragstart()');
                    return false;
                },
                false
            );
            el.addEventListener(
                'dragend',
                function(e) {
                    this.classList.remove('drag');
                    return false;
                },
                false
            );
        }
    }
});

moveApp.directive('droppable', function() {
    return {
        scope: {
            drop: '&' // parent
        },
        link: function(scope, element) {
            // again we need the native object
            var el = element[0];
            el.addEventListener(
                'dragover',
                function(e) {
                    e.dataTransfer.dropEffect = 'move';
              // allows us to drop
                    if (e.preventDefault) e.preventDefault();
                    this.classList.add('over');
                    return false;
                },
                false
            );
            el.addEventListener(
                'dragenter',
                function(e) {
                    this.classList.add('over');
                    return false;
                },
                false
            );
            el.addEventListener(
                'dragleave',
                function(e) {
                    this.classList.remove('over');
                    return false;
                },
                false
            );
            el.addEventListener(
                'drop',
                function(e) {
                  // Stops some browsers from redirecting.
                    if (e.stopPropagation) e.stopPropagation();
                    this.classList.remove('over');
                  // var item = document.getElementById(e.dataTransfer.getData('Text'));
                  // this.appendChild(item);
                  
                  // call the drop passed drop function
                    scope.$apply('drop()');
                    return false;
                },
                false
            );
        }
    }
});


moveApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/main', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        }).

        when('/calendar', {
            templateUrl: 'partials/calendar.html',
            controller: 'CalendarCtrl'
        }).
        when('/timepicker', {
            templateUrl: 'partials/timepicker.html',
            controller: 'TimepickerCtrl'
        }).
        when('/navbar', {
            templateUrl: 'partials/navbar.html',
            controller: 'NavbarCtrl'
        }).
        when('/about', {
            templateUrl: 'partials/about.html',    
        }).
        otherwise({
            redirectTo: '/landing'
        });
    }
]);
