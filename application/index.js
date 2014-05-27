var express = require('express');
var fs = require('fs');
var path = require('path');

var config = require('./config');
var NavigationItem = require('./core/navigationitem');

var app = express();
app.set('env', config.env);
app.set('config', config);
app.enable('case sensitive routing');
app.use(require('morgan')('tiny'));
app.use(require('method-override')());
app.use(require('body-parser')());
app.use(require('errorhandler')());
app.use(express.static(__dirname + '/../public'));

/** @type {!Array.<NavigationItem>} */
var navigationItems = NavigationItem.createFromConfig(config.navigation);

var routeNameToUrl = function(items, opt_routePaths) {
  var routePaths = opt_routePaths || {};

  items.forEach(function(item) {
    var name = item.getName();
    var url = item.getUrl();
    var childs = item.getChilds();

    if (name && url) {
      routePaths[name] = url;
    }

    if (childs) {
      routeNameToUrl(childs, routePaths);
    }
  });

  return routePaths;
};

var routePaths = routeNameToUrl(navigationItems);

var getRoute = function(navigation, item) {
  var name = item.getName();
  var url = item.getUrl();

  if (name && url) {
    return function(req, res) {
      var Template = require('./view/' + name + '.js');
      var template = new Template({
        header: item.getHeader(),
        navigation: navigation,
        title: item.getTitle(),
        url: url,
      });
      template.setPageAbsPath(url);
      template.setRoutePaths(routePaths);
      res.send(200, template.render());
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

var createDir = function(dirname) {
  dirname = path.resolve(dirname);

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
  }
};

app.get('/download', function(req, res) {
  /** @type {!Array.<NavigationItem>} */
  var navigationItems = NavigationItem.createFromConfig(config.navigation, true);
  /** @type {!Object.<string>} */
  var routePaths = routeNameToUrl(navigationItems);
  var getContent = function(navigation, item) {
    var name = item.getName();
    var url = item.getUrl();
    var content = '';

    if (name && url) {
      var Template = require('./view/' + name + '.js');
      var template = new Template({
        header: item.getHeader(),
        navigation: navigation,
        title: item.getTitle(),
        url: url,
      });
      template.setPageAbsPath(item.getUrl());
      template.setRoutePaths(routePaths);
      content = template.render();
    }

    return content;
  };
  var rootPath = path.resolve(__dirname + '/../doc');
  var createFiles = function(navigation, opt_items) {
    var items = opt_items || navigation;

    items.forEach(function(item) {
      var content = getContent(navigation, item);
      var childs = item.getChilds();

      if (content) {
        createDir(path.dirname(rootPath + item.getUrl()));
        fs.appendFileSync(rootPath + '/' + item.getUrl(), content);
      }

      if (childs) {
        createFiles(navigation, childs);
      }
    });
  };
  createFiles(navigationItems);
  var ncp = require('ncp').ncp;
  ncp(__dirname + '/../public/s', rootPath + '/s', function(err) {
    console.log(err);
  });
  res.json(null);
});

app.listen(config.port, config.ip, function() {
  console.log(
    'High Point API server listening on ' + config.ip + ':' + config.port);
});
