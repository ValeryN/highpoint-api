var fs = require('fs');
var path = require('path');

var NavigationItem = require('../application/core/navigationitem');
var config = require('../application/config');


var deleteFolderRecursive = function(path) {
  var files = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file,index){
      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

/** @type {!Array.<NavigationItem>} */
var navigationItems = NavigationItem.createFromConfig(config.navigation, true);
/** @type {!Object.<string>} */
var routePaths = NavigationItem.routeNameToUrl(navigationItems);
var getContent = function(navigation, item) {
  var templatePath = item.getTemplate();
  var url = item.getUrl();
  var content = '';

  if (templatePath && url) {
    var Template = require('../application/views/' + templatePath + '.js');
    var template = new Template({
      header: item.getHeader(),
      navigation: navigation,
      title: item.getTitle(),
      url: url,
    });
    template.setPageAbsPath(item.getUrl());
    template.setRoutePaths(routePaths);
    template.setScope(item.getScope());
    content = template.render();
  }

  return content;
};
var rootPath = path.resolve(__dirname + '/../../doc');
var createFiles = function(navigation, opt_items) {
  var items = opt_items || navigation;

  items.forEach(function(item) {
    var content = getContent(navigation, item);
    var childs = item.getChilds();

    if (content) {
      require('mkdirp').sync(path.dirname(rootPath + item.getUrl()));
      fs.appendFileSync(rootPath + '/' + item.getUrl(), content);
    }

    if (childs) {
      createFiles(navigation, childs);
    }
  });
};
deleteFolderRecursive(rootPath);
createFiles(navigationItems);
require('ncp').ncp(__dirname + '/../public/s', rootPath + '/s', function(err) {
  console.error(err);
});
