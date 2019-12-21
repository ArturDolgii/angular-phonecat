class Config {
  static $inject = ['$routeProvider'];
  constructor($routeProvider: ng.route.IRouteProvider) {
    $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    otherwise('/phones');
  }
}

export default Config;
