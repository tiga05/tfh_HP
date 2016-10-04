/**
 * Created by Tim on 05.02.2016.
 */
//import angular from 'angular';
import mainModule from './main';

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainModule.name]);
});
