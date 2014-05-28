var express = require('express');

var NavigationItem = require('./core/navigationitem');
var config = require('./config');


var app = express();
app.set('env', 'development');
app.enable('case sensitive routing');
app.use(require('morgan')('tiny'));
app.use(require('method-override')());
app.use(require('body-parser')());
app.use(require('errorhandler')());
app.use(express.static(__dirname + '/../public'));

/** @type {!Array.<NavigationItem>} */
var navigationItems = NavigationItem.createFromConfig(config.navigation);
/** @type {!Object.<string>} */
var routePaths = NavigationItem.routeNameToUrl(navigationItems);

var getRoute = function(navigation, item) {
  var templatePath = item.getTemplate();
  var url = item.getUrl();

  if (templatePath && url) {
    return function(req, res) {
      var Template = require('./views/' + templatePath + '.js');
      var template = new Template({
        header: item.getHeader(),
        navigation: navigation,
        title: item.getTitle(),
        url: url,
      });
      template.setPageAbsPath(url);
      template.setRoutePaths(routePaths);
      template.setScope(item.getScope());
      var html = template.render();
      var tidy = require('htmltidy').tidy;
      tidy(html, {
        //indent: true
      }, function(err, html) {
        if (err) return next(err);

        res.send(200, html);
      });
    };
  }

  return null;
};

var setNavigationRoutes = function(navigation, opt_items) {
  var items = opt_items || navigation;

  items.forEach(function(item) {
    var route = getRoute(navigation, item);
    var childs = item.getChilds();

    if (route) {
      app.get(item.getAbsUrl(), route);
    }

    if (childs) {
      setNavigationRoutes(navigation, childs);
    }
  });
};

setNavigationRoutes(navigationItems);

app.listen(config.port, config.ip, function() {
  console.log(
    'High Point API server listening on ' + config.ip + ':' + config.port);
});
